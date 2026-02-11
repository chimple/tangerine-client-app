import { TestBed } from '@angular/core/testing';
import { HttpTestingController, provideHttpClientTesting } from '@angular/common/http/testing';
import { provideHttpClient } from '@angular/common/http';
import { OpdsService } from './opds.service';
import { OpdsFeed } from '../models/opds/opds-feed';
import { OpdsGroup } from '../models/opds/opds-group';
import { OpdsPublication } from '../models/opds/opds-publication';

describe('OpdsService', () => {
  let service: OpdsService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        OpdsService,
        provideHttpClient(),
        provideHttpClientTesting()
      ]
    });
    service = TestBed.inject(OpdsService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should fetch and parse an OPDS feed', () => {
    const mockFeed: OpdsFeed = {
      metadata: { title: 'Test Feed' },
      links: [],
      navigation: [{ href: 'group.json', title: 'Group 1', rel: 'section' }] // navigation usually doesn't have type in minimal mock unless needed
    };

    service.getFeed('https://example.com/opds.json').subscribe(feed => {
      expect(feed.metadata.title).toBe('Test Feed');
      expect(feed.navigation?.length).toBe(1);
    });

    const req = httpMock.expectOne('https://example.com/opds.json');
    expect(req.request.method).toBe('GET');
    req.flush(mockFeed);
  });

  it('should fetch and parse an OPDS Group', () => {
    const mockGroupData = {
      metadata: { title: 'Test Group' },
      links: [],
      publications: [
        {
          metadata: { title: 'Form 1' },
          links: [],
          images: []
        }
      ]
    };

    service.getGroup('https://example.com/group.json').subscribe((group: OpdsGroup) => {
      expect(group).toBeInstanceOf(OpdsGroup);
      expect(group.metadata.title).toBe('Test Group');
      expect(group.publications.length).toBe(1);
      expect(group.publications[0]).toBeInstanceOf(OpdsPublication);
      expect(group.publications[0].metadata.title).toBe('Form 1');
    });

    const req = httpMock.expectOne('https://example.com/group.json');
    expect(req.request.method).toBe('GET');
    req.flush(mockGroupData);
  });

  it('should fetch and parse an OPDS Publication', () => {
    const mockPubData = {
      metadata: { title: 'Test Form' },
      links: [],
      resources: [
        { href: 'form.html', type: 'text/html' }
      ]
    };

    service.getPublication('https://example.com/form.json').subscribe((pub: OpdsPublication) => {
      expect(pub).toBeInstanceOf(OpdsPublication);
      expect(pub.metadata.title).toBe('Test Form');
      expect(pub.getResourcesByType('text/html').length).toBe(1);
    });

    const req = httpMock.expectOne('https://example.com/form.json');
    expect(req.request.method).toBe('GET');
    req.flush(mockPubData);
  });
});
