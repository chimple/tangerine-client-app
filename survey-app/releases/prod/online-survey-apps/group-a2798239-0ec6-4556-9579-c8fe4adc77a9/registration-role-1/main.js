(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /tangerine/online-survey-app/src/main.ts */"zUnb");


/***/ }),

/***/ "3ofO":
/*!****************************************************************************!*\
  !*** ./src/app/form-submitted-success/form-submitted-success.component.ts ***!
  \****************************************************************************/
/*! exports provided: FormSubmittedSuccessComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormSubmittedSuccessComponent", function() { return FormSubmittedSuccessComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class FormSubmittedSuccessComponent {
    constructor() { }
    ngOnInit() {
    }
}
FormSubmittedSuccessComponent.ɵfac = function FormSubmittedSuccessComponent_Factory(t) { return new (t || FormSubmittedSuccessComponent)(); };
FormSubmittedSuccessComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FormSubmittedSuccessComponent, selectors: [["app-form-submitted-success"]], decls: 2, vars: 1, template: function FormSubmittedSuccessComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"]("Thank you. Your form response has been submitted.");
    } }, styles: ["p[_ngcontent-%COMP%] {\n    margin: 75px 5px 0px;\n    text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZm9ybS1zdWJtaXR0ZWQtc3VjY2Vzcy9mb3JtLXN1Ym1pdHRlZC1zdWNjZXNzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxvQkFBb0I7SUFDcEIsa0JBQWtCO0FBQ3RCIiwiZmlsZSI6InNyYy9hcHAvZm9ybS1zdWJtaXR0ZWQtc3VjY2Vzcy9mb3JtLXN1Ym1pdHRlZC1zdWNjZXNzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJwIHtcbiAgICBtYXJnaW46IDc1cHggNXB4IDBweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FormSubmittedSuccessComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-form-submitted-success',
                templateUrl: './form-submitted-success.component.html',
                styleUrls: ['./form-submitted-success.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "7jmW":
/*!**********************************************************!*\
  !*** ./src/app/core/auth/_guards/login-guard.service.ts ***!
  \**********************************************************/
/*! exports provided: LoginGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginGuard", function() { return LoginGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _services_authentication_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../_services/authentication.service */ "QOv3");
/* harmony import */ var src_app_shared_services_app_config_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/_services/app-config.service */ "PiYG");






class LoginGuard {
    constructor(router, authenticationService, appConfigService) {
        this.router = router;
        this.authenticationService = authenticationService;
        this.appConfigService = appConfigService;
    }
    canActivate(route, state) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const config = yield this.appConfigService.getAppConfig();
            if (config['requireAccessCode'] === 'true') {
                if (yield this.authenticationService.isLoggedIn()) {
                    return true;
                }
                else {
                    this.router.navigate(['survey-login'], { queryParams: { returnUrl: state.url } });
                    return false;
                }
            }
            return true;
        });
    }
}
LoginGuard.ɵfac = function LoginGuard_Factory(t) { return new (t || LoginGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_services_authentication_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](src_app_shared_services_app_config_service__WEBPACK_IMPORTED_MODULE_4__["AppConfigService"])); };
LoginGuard.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: LoginGuard, factory: LoginGuard.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](LoginGuard, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }, { type: _services_authentication_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"] }, { type: src_app_shared_services_app_config_service__WEBPACK_IMPORTED_MODULE_4__["AppConfigService"] }]; }, null); })();


/***/ }),

/***/ "97of":
/*!***********************************************!*\
  !*** ./src/app/case/services/case.service.ts ***!
  \***********************************************/
/*! exports provided: markQualifyingCaseAsComplete, markQualifyingEventsAsComplete, CaseService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "markQualifyingCaseAsComplete", function() { return markQualifyingCaseAsComplete; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "markQualifyingEventsAsComplete", function() { return markQualifyingEventsAsComplete; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CaseService", function() { return CaseService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _classes_notification_class__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../classes/notification.class */ "Uuj1");
/* harmony import */ var tangy_form_tangy_form_response_model_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tangy-form/tangy-form-response-model.js */ "9u36");
/* harmony import */ var _classes_case_class__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../classes/case.class */ "If3t");
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! uuid */ "EcEN");
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(uuid__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! moment */ "wd/R");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var src_app_app_context_enum__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/app-context.enum */ "MB+D");
/* harmony import */ var src_app_tangy_forms_tangy_form_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/tangy-forms/tangy-form.service */ "DbiD");
/* harmony import */ var _case_definitions_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./case-definitions.service */ "E88P");
/* harmony import */ var _shared_services_app_config_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./../../shared/_services/app-config.service */ "PiYG");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common/http */ "tk/3");



// Classes.


// Other.









class CaseService {
    constructor(tangyFormService, caseDefinitionsService, appConfigService, http) {
        this.tangyFormService = tangyFormService;
        this.caseDefinitionsService = caseDefinitionsService;
        this.appConfigService = appConfigService;
        this.http = http;
        // Opening a case confirmation semaphore.
        this.openCaseConfirmed = false;
        this._shouldSave = true;
        this.onChangeLocation$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.queryCaseEventDefinitionId = 'query-event';
        this.queryEventFormDefinitionId = 'query-form-event';
        this.queryFormId = 'query-form';
    }
    set case(caseInstance) {
        const caseInfo = {
            caseInstance,
            caseDefinition: this.caseDefinition
        };
        this._case = markQualifyingCaseAsComplete(markQualifyingEventsAsComplete(caseInfo)).caseInstance;
    }
    get case() {
        return this._case;
    }
    setContext(caseEventId = '', eventFormId = '') {
        window['caseInstance'] = this.case;
        this.caseEvent = caseEventId
            ? this.case
                .events
                .find(caseEvent => caseEvent.id === caseEventId)
            : null;
        window['caseEvent'] = this.caseEvent;
        this.caseEventDefinition = caseEventId
            ? this
                .caseDefinition
                .eventDefinitions
                .find(caseEventDefinition => caseEventDefinition.id === this.caseEvent.caseEventDefinitionId)
            : null;
        window['caseEventDefinition'] = this.caseEventDefinition;
        this.eventForm = eventFormId
            ? this.caseEvent
                .eventForms
                .find(eventForm => eventForm.id === eventFormId)
            : null;
        window['eventForm'] = this.eventForm;
        this.eventFormDefinition = eventFormId
            ? this.caseEventDefinition
                .eventFormDefinitions
                .find(eventFormDefinition => eventFormDefinition.id === this.eventForm.eventFormDefinitionId)
            : null;
        this.participant = this.eventForm
            ? this.case.participants.find(participant => participant.id === this.eventForm.participantId)
            : null;
        window['participant'] = this.participant;
    }
    getCurrentCaseEventId() {
        var _a;
        return (_a = this === null || this === void 0 ? void 0 : this.caseEvent) === null || _a === void 0 ? void 0 : _a.id;
    }
    getCurrentEventFormId() {
        var _a;
        return (_a = this === null || this === void 0 ? void 0 : this.eventForm) === null || _a === void 0 ? void 0 : _a.id;
    }
    /*
     * Case API
     */
    get id() {
        return this._case._id;
    }
    get participants() {
        return this._case.participants || [];
    }
    get events() {
        return this._case.events || [];
    }
    get forms() {
        return this._case.events.reduce((forms, event) => {
            return [
                ...event.eventForms || [],
                ...forms
            ];
        }, []);
    }
    get groupId() {
        return this._case.groupId;
    }
    get roleDefinitions() {
        return this.caseDefinition.caseRoles;
    }
    get caseEventDefinitions() {
        return this.caseDefinition.eventDefinitions || [];
    }
    get eventFormDefinitions() {
        return this.caseDefinition.eventDefinitions.reduce((formDefs, eventDef) => {
            return [
                ...eventDef.eventFormDefinitions.map(eventFormDef => {
                    return Object.assign(Object.assign({}, eventFormDef), { eventDefinitionId: eventDef.id });
                }) || [],
                ...formDefs
            ];
        }, []);
    }
    create(caseDefinitionId) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.caseDefinition = (yield this.caseDefinitionsService.load())
                .find(caseDefinition => caseDefinition.id === caseDefinitionId);
            this.case = new _classes_case_class__WEBPACK_IMPORTED_MODULE_4__["Case"]({ caseDefinitionId, events: [], _id: Object(uuid__WEBPACK_IMPORTED_MODULE_5__["v4"])() });
            delete this.case._rev;
            const tangyFormContainerEl = document.createElement('div');
            tangyFormContainerEl.innerHTML = yield this.tangyFormService.getFormMarkup(this.caseDefinition.formId, null);
            const tangyFormEl = tangyFormContainerEl.querySelector('tangy-form');
            tangyFormEl.style.display = 'none';
            document.body.appendChild(tangyFormContainerEl);
            this.case.form = tangyFormEl.getProps();
            this.case.items = [];
            tangyFormEl.querySelectorAll('tangy-form-item').forEach((item) => {
                this.case.items.push(item.getProps());
            });
            tangyFormEl.querySelectorAll('tangy-form-item')[0].submit();
            this.case.items[0].inputs = tangyFormEl.querySelectorAll('tangy-form-item')[0].inputs;
            tangyFormEl.response = this.case;
            this.case = Object.assign(Object.assign({}, this.case), tangyFormEl.response);
            tangyFormContainerEl.remove();
            yield this.setCase(this.case);
            this.case.caseDefinitionId = caseDefinitionId;
            this.case.label = this.caseDefinition.name;
            yield this.save();
        });
    }
    archive() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const eventForms = this.case.events.reduce((eventForms, event) => {
                return Array.isArray(event.eventForms)
                    ? [...eventForms, ...event.eventForms]
                    : eventForms;
            }, []);
            for (let eventForm of eventForms) {
                if (eventForm.formResponseId) {
                    const formResponse = yield this.tangyFormService.getResponse(eventForm.formResponseId);
                    if (formResponse) {
                        formResponse.archived = true;
                        yield this.tangyFormService.saveResponse(formResponse);
                    }
                }
            }
            this.case.archived = true;
            yield this.save();
        });
    }
    unarchive() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const eventForms = this.case.events.reduce((eventForms, event) => {
                return Array.isArray(event.eventForms)
                    ? [...eventForms, ...event.eventForms]
                    : eventForms;
            }, []);
            for (let eventForm of eventForms) {
                if (eventForm.formResponseId) {
                    const formResponse = yield this.tangyFormService.getResponse(eventForm.formResponseId);
                    if (formResponse) {
                        formResponse.archived = false;
                        yield this.tangyFormService.saveResponse(formResponse);
                    }
                }
            }
            this.case.archived = false;
            yield this.save();
        });
    }
    delete() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const eventForms = this.case.events.reduce((eventForms, event) => {
                return Array.isArray(event.eventForms)
                    ? [...eventForms, ...event.eventForms]
                    : eventForms;
            }, []);
            for (let eventForm of eventForms) {
                if (eventForm.formResponseId) {
                    const formResponse = yield this.tangyFormService.getResponse(eventForm.formResponseId);
                    if (formResponse) {
                        const archivedFormResponse = new tangy_form_tangy_form_response_model_js__WEBPACK_IMPORTED_MODULE_3__["TangyFormResponseModel"]({
                            archived: true,
                            _rev: formResponse._rev,
                            _id: formResponse._id,
                            form: {
                                id: formResponse.form.id,
                                title: formResponse.form.title,
                                tagName: formResponse.form.tagName,
                                complete: formResponse.form.complete
                            },
                            items: [],
                            events: [],
                            location: formResponse.location,
                            type: "response",
                            caseId: formResponse.caseId,
                            eventId: formResponse.eventId,
                            eventFormId: formResponse.eventFormId,
                            participantId: formResponse.participantId,
                            groupId: formResponse.groupId,
                            complete: formResponse.complete,
                            tangerineModifiedOn: new Date().getTime()
                        });
                        yield this.tangyFormService.saveResponse(archivedFormResponse);
                    }
                }
            }
            this.case.archived = true;
            // Keeping inputs so that the case show up in searches *on the server*
            const archivedCase = new _classes_case_class__WEBPACK_IMPORTED_MODULE_4__["Case"]({
                archived: true,
                _rev: this.case._rev,
                _id: this.case._id,
                form: {
                    id: this.case.form.id,
                    tagName: this.case.form.tagName,
                    complete: this.case.form.complete
                },
                items: [{}],
                events: [],
                location: this.case.location,
                type: "case",
                caseDefinitionId: this.case.caseDefinitionId,
                groupId: this.case['groupId'],
                complete: this.case.complete,
                tangerineModifiedOn: new Date().getTime()
            });
            if (this.case.items[0]) {
                archivedCase.items[0].id = this.case.items[0].id;
                archivedCase.items[0].title = this.case.items[0].title;
                archivedCase.items[0].tagName = this.case.items[0].tagName;
                archivedCase.items[0].inputs = this.case.items[0].inputs;
            }
            yield this.tangyFormService.saveResponse(archivedCase);
        });
    }
    setCase(caseInstance) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            // Note the order of setting caseDefinition before case matters because the setter for case expects caseDefinition to be the current one.
            this.caseDefinition = (yield this.caseDefinitionsService.load())
                .find(caseDefinition => caseDefinition.id === caseInstance.caseDefinitionId);
            const flatLocationList = yield this.appConfigService.getFlatLocationList();
            this.location = Object.keys(caseInstance.location).map(level => flatLocationList.locations.find(node => node.id === caseInstance.location[level]));
            this.case = caseInstance;
        });
    }
    load(id) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield this.setCase(new _classes_case_class__WEBPACK_IMPORTED_MODULE_4__["Case"](yield this.tangyFormService.getResponse(id)));
            this._shouldSave = true;
        });
    }
    loadInMemory(caseData) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield this.setCase(new _classes_case_class__WEBPACK_IMPORTED_MODULE_4__["Case"](caseData));
            this._shouldSave = false;
        });
    }
    // @Param location: Can be Object where keys are levels and values are IDs of locations or an Array from the Tangy Location input's value.
    changeLocation(location) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            location = Array.isArray(location)
                ? location.reduce((location, level) => { return Object.assign(Object.assign({}, location), { [level.level]: level.value }); }, {})
                : location;
            this.case.location = location;
            const eventForms = this.case.events
                .reduce((eventForms, event) => {
                return [...eventForms, ...event.eventForms];
            }, []);
            for (let eventForm of eventForms) {
                if (eventForm.formResponseId) {
                    const response = yield this.tangyFormService.getResponse(eventForm.formResponseId);
                    response.location = location;
                    yield this.tangyFormService.saveResponse(response);
                }
            }
            this.onChangeLocation$.next(location);
        });
    }
    getCaseDefinitionByID(id) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            return yield this.http.get(`./assets/${id}.json`)
                .toPromise();
        });
    }
    save() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (this._shouldSave) {
                yield this.tangyFormService.saveResponse(this.case);
                yield this.setCase(yield this.tangyFormService.getResponse(this.case._id));
            }
        });
    }
    setVariable(variableName, value) {
        let input = this.case.items[0].inputs.find(input => input.name === variableName);
        if (input) {
            input.value = value;
        }
        else {
            this.case.items[0].inputs.push({ name: variableName, value: value });
        }
    }
    getVariable(variableName) {
        return this.case.items[0].inputs.find(input => input.name === variableName)
            ? this.case.items[0].inputs.find(input => input.name === variableName).value
            : undefined;
    }
    /*
     * Case Event API
     */
    createEvent(eventDefinitionId) {
        const caseEventDefinition = this.caseDefinition
            .eventDefinitions
            .find(eventDefinition => eventDefinition.id === eventDefinitionId);
        const caseEvent = {
            id: Object(uuid__WEBPACK_IMPORTED_MODULE_5__["v4"])(),
            caseId: this.case._id,
            name: caseEventDefinition.name,
            complete: false,
            estimate: true,
            caseEventDefinitionId: eventDefinitionId,
            windowEndDay: undefined,
            windowStartDay: undefined,
            estimatedDay: undefined,
            occurredOnDay: undefined,
            scheduledDay: undefined,
            eventForms: [],
            startDate: 0,
            archived: false
        };
        this.case.events.push(caseEvent);
        for (const caseParticipant of this.case.participants) {
            for (const eventFormDefinition of caseEventDefinition.eventFormDefinitions) {
                if (eventFormDefinition.forCaseRole.split(',').map(e => e.trim()).includes(caseParticipant.caseRoleId)
                    &&
                        (eventFormDefinition.autoPopulate ||
                            (eventFormDefinition.autoPopulate === undefined && eventFormDefinition.required === true))) {
                    this.createEventForm(caseEvent.id, eventFormDefinition.id, caseParticipant.id);
                }
            }
        }
        return caseEvent;
    }
    onCaseEventCreate(caseEvent) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const caseEventDefinition = this.caseDefinition
                .eventDefinitions
                .find(eventDefinition => eventDefinition.id === caseEvent.caseEventDefinitionId);
            yield eval(caseEventDefinition.onEventCreate);
        });
    }
    setEventName(eventId, name) {
        this.case.events = this.case.events.map(event => {
            return event.id === eventId
                ? Object.assign(Object.assign({}, event), { name }) : event;
        });
    }
    setEventEstimatedDay(eventId, timeInMs) {
        const estimatedDay = moment__WEBPACK_IMPORTED_MODULE_7__((new Date(timeInMs))).format('YYYY-MM-DD');
        this.case.events = this.case.events.map(event => {
            return event.id === eventId
                ? Object.assign(Object.assign({}, event), { estimatedDay }) : event;
        });
    }
    setEventScheduledDay(eventId, timeInMs) {
        const scheduledDay = moment__WEBPACK_IMPORTED_MODULE_7__((new Date(timeInMs))).format('YYYY-MM-DD');
        this.case.events = this.case.events.map(event => {
            return event.id === eventId
                ? Object.assign(Object.assign({}, event), { scheduledDay }) : event;
        });
    }
    setEventWindow(eventId, windowStartDayTimeInMs, windowEndDayTimeInMs) {
        const windowStartDay = moment__WEBPACK_IMPORTED_MODULE_7__((new Date(windowStartDayTimeInMs))).format('YYYY-MM-DD');
        const windowEndDay = moment__WEBPACK_IMPORTED_MODULE_7__((new Date(windowEndDayTimeInMs))).format('YYYY-MM-DD');
        this.case.events = this.case.events.map(event => {
            return event.id === eventId
                ? Object.assign(Object.assign({}, event), { windowStartDay, windowEndDay }) : event;
        });
    }
    setEventOccurredOn(eventId, timeInMs) {
        const occurredOnDay = moment__WEBPACK_IMPORTED_MODULE_7__((new Date(timeInMs))).format('YYYY-MM-DD');
        return this.case.events = this.case.events.map(event => {
            return event.id === eventId
                ? Object.assign(Object.assign({}, event), { occurredOnDay }) : event;
        });
    }
    disableEventDefinition(eventDefinitionId) {
        if (this.case.disabledEventDefinitionIds.indexOf(eventDefinitionId) === -1) {
            this.case.disabledEventDefinitionIds.push(eventDefinitionId);
        }
    }
    activateCaseEvent(caseEventId) {
        this.case = Object.assign(Object.assign({}, this.case), { events: this.case.events.map(event => {
                return event.id === caseEventId
                    ? Object.assign(Object.assign({}, event), { inactive: false }) : event;
            }) });
    }
    deactivateCaseEvent(caseEventId) {
        this.case = Object.assign(Object.assign({}, this.case), { events: this.case.events.map(event => {
                return event.id === caseEventId
                    ? Object.assign(Object.assign({}, event), { inactive: true }) : event;
            }) });
    }
    archiveCaseEvent(caseEventId) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const caseEvent = this.case.events.find(event => event.id === caseEventId);
            if (caseEvent && !caseEvent.archived) {
                var unarchivedEventForms = caseEvent.eventForms.filter(form => !form.archived);
                for (var eventForm of unarchivedEventForms) {
                    if (eventForm.formResponseId) {
                        const formResponse = yield this.tangyFormService.getResponse(eventForm.formResponseId);
                        if (formResponse) {
                            formResponse.archived = true;
                            yield this.tangyFormService.saveResponse(formResponse);
                        }
                    }
                    eventForm.archived = true;
                }
                caseEvent.archived = true;
                yield this.save();
            }
        });
    }
    unarchiveCaseEvent(caseEventId) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const caseEvent = this.case.events.find(event => event.id === caseEventId);
            if (caseEvent && caseEvent.archived) {
                var archivedEventForms = caseEvent.eventForms.filter(form => form.archived);
                for (var eventForm of archivedEventForms) {
                    if (eventForm.formResponseId) {
                        const formResponse = yield this.tangyFormService.getResponse(eventForm.formResponseId);
                        if (formResponse) {
                            formResponse.archived = false;
                            yield this.tangyFormService.saveResponse(formResponse);
                        }
                    }
                    eventForm.archived = false;
                }
                caseEvent.archived = false;
                yield this.save();
            }
        });
    }
    /*
     * Event Form API
     */
    createEventForm(caseEventId, eventFormDefinitionId, participantId = '') {
        const caseEvent = this.case.events.find(event => event.id === caseEventId);
        const eventFormId = Object(uuid__WEBPACK_IMPORTED_MODULE_5__["v4"])();
        this.case = Object.assign(Object.assign({}, this.case), { events: this.case.events.map(event => event.id === caseEventId
                ? Object.assign(Object.assign({}, event), { eventForms: [
                        ...event.eventForms,
                        {
                            id: eventFormId,
                            complete: false,
                            required: this
                                .caseDefinition
                                .eventDefinitions
                                .find(eventDefinition => eventDefinition.id === caseEvent.caseEventDefinitionId)
                                .eventFormDefinitions
                                .find(eventFormDefinition => eventFormDefinition.id === eventFormDefinitionId)
                                .required,
                            caseId: this.case._id,
                            participantId,
                            caseEventId,
                            eventFormDefinitionId
                        }
                    ] }) : event) });
        return this.case
            .events
            .find(event => event.id === caseEvent.id)
            .eventForms
            .find(eventForm => eventForm.id === eventFormId);
    }
    // @TODO Deprecated.
    startEventForm(caseEventId, eventFormDefinitionId, participantId = '') {
        console.warn('caseService.startEventForm(...) is deprecated. Please use caseService.createEventForm(...) before startEventForm is removed.');
        return this.createEventForm(caseEventId, eventFormDefinitionId, participantId);
    }
    deleteEventForm(caseEventId, eventFormId) {
        this.case = Object.assign(Object.assign({}, this.case), { events: this.case.events.map(event => {
                return Object.assign(Object.assign({}, event), { eventForms: event.id === caseEventId
                        ? event.eventForms.filter(eventForm => eventForm.id !== eventFormId)
                        : event.eventForms });
            }) });
    }
    setEventFormData(caseEventId, eventFormId, key, value) {
        const index = this
            .case
            .events
            .find(caseEvent => caseEvent.id === caseEventId)
            .eventForms.findIndex(eventForm => eventForm.id === eventFormId);
        this
            .case
            .events
            .find(caseEvent => caseEvent.id === caseEventId).eventForms[index].data = Object.assign(Object.assign({}, this
            .case
            .events
            .find(caseEvent => caseEvent.id === caseEventId).eventForms[index].data), { [key]: value });
    }
    getEventFormData(caseEventId, eventFormId, key) {
        const index = this
            .case
            .events
            .find(caseEvent => caseEvent.id === caseEventId)
            .eventForms.findIndex(eventForm => eventForm.id === eventFormId);
        return this
            .case
            .events
            .find(caseEvent => caseEvent.id === caseEventId).eventForms[index].data[key] || '';
    }
    markEventFormRequired(caseEventId, eventFormId) {
        this.case = Object.assign(Object.assign({}, this.case), { events: this.case.events.map(event => event.id !== caseEventId
                ? event
                : Object.assign(Object.assign({}, event), { eventForms: event.eventForms.map(eventForm => eventForm.id !== eventFormId
                        ? eventForm
                        : Object.assign(Object.assign({}, eventForm), { required: true })) })) });
    }
    markEventFormNotRequired(caseEventId, eventFormId) {
        this.case = Object.assign(Object.assign({}, this.case), { events: this.case.events.map(event => event.id !== caseEventId
                ? event
                : Object.assign(Object.assign({}, event), { eventForms: event.eventForms.map(eventForm => eventForm.id !== eventFormId
                        ? eventForm
                        : Object.assign(Object.assign({}, eventForm), { required: false })) })) });
    }
    markEventFormComplete(caseEventId, eventFormId) {
        this.case = Object.assign(Object.assign({}, this.case), { events: this.case.events.map(event => event.id !== caseEventId
                ? event
                : Object.assign(Object.assign({}, event), { eventForms: event.eventForms.map(eventForm => eventForm.id !== eventFormId
                        ? eventForm
                        : Object.assign(Object.assign({}, eventForm), { complete: true })) })) });
    }
    activateEventForm(caseEventId, eventFormId) {
        this.case = Object.assign(Object.assign({}, this.case), { events: this.case.events.map(event => event.id !== caseEventId
                ? event
                : Object.assign(Object.assign({}, event), { eventForms: event.eventForms.map(eventForm => eventForm.id !== eventFormId
                        ? eventForm
                        : Object.assign(Object.assign({}, eventForm), { inactive: false })) })) });
    }
    deactivateEventForm(caseEventId, eventFormId) {
        this.case = Object.assign(Object.assign({}, this.case), { events: this.case.events.map(event => event.id !== caseEventId
                ? event
                : Object.assign(Object.assign({}, event), { eventForms: event.eventForms.map(eventForm => eventForm.id !== eventFormId
                        ? eventForm
                        : Object.assign(Object.assign({}, eventForm), { inactive: true })) })) });
    }
    archiveEventForm(caseEventId, eventFormId) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const caseEvent = this.case.events.find(event => event.id === caseEventId);
            if (caseEvent) {
                var eventForm = caseEvent.eventForms.find(form => form.id === eventFormId);
                if (eventForm) {
                    if (eventForm.formResponseId) {
                        const formResponse = yield this.tangyFormService.getResponse(eventForm.formResponseId);
                        if (formResponse && !formResponse.archived) {
                            formResponse.archived = true;
                            yield this.tangyFormService.saveResponse(formResponse);
                        }
                    }
                    eventForm.archived = true;
                    yield this.save();
                }
            }
        });
    }
    unarchiveEventForm(caseEventId, eventFormId) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const caseEvent = this.case.events.find(event => event.id === caseEventId);
            if (caseEvent) {
                var eventForm = caseEvent.eventForms.find(form => form.id === eventFormId);
                if (eventForm) {
                    if (eventForm.formResponseId) {
                        const formResponse = yield this.tangyFormService.getResponse(eventForm.formResponseId);
                        if (formResponse && formResponse.archived) {
                            formResponse.archived = false;
                            yield this.tangyFormService.saveResponse(formResponse);
                        }
                    }
                    eventForm.archived = false;
                    yield this.save();
                }
            }
        });
    }
    /*
     * Form Response API
     */
    archiveFormResponse(caseEventId, eventFormId) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const caseEvent = this.case.events.find(event => event.id === caseEventId);
            if (caseEvent) {
                var eventForm = caseEvent.eventForms.find(form => form.id === eventFormId);
                if (eventForm && eventForm.formResponseId) {
                    const formResponse = yield this.tangyFormService.getResponse(eventForm.formResponseId);
                    if (formResponse) {
                        formResponse.archived = true;
                        yield this.tangyFormService.saveResponse(formResponse);
                    }
                    eventForm.archived = true;
                    yield this.save();
                }
            }
        });
    }
    unarchiveFormResponse(caseEventId, eventFormId) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const caseEvent = this.case.events.find(event => event.id === caseEventId);
            if (caseEvent) {
                var eventForm = caseEvent.eventForms.find(form => form.id === eventFormId);
                if (eventForm && eventForm.formResponseId) {
                    const formResponse = yield this.tangyFormService.getResponse(eventForm.formResponseId);
                    if (formResponse) {
                        formResponse.archived = false;
                        yield this.tangyFormService.saveResponse(formResponse);
                    }
                    eventForm.archived = false;
                    yield this.save();
                }
            }
        });
    }
    deleteFormResponse(caseEventId, eventFormId) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const caseEvent = this.case.events.find(event => event.id === caseEventId);
            if (caseEvent) {
                var eventForm = caseEvent.eventForms.find(form => form.id === eventFormId);
                if (eventForm && eventForm.formResponseId) {
                    const formResponse = yield this.tangyFormService.getResponse(eventForm.formResponseId);
                    if (formResponse) {
                        const archivedFormResponse = new tangy_form_tangy_form_response_model_js__WEBPACK_IMPORTED_MODULE_3__["TangyFormResponseModel"]({
                            archived: true,
                            _rev: formResponse._rev,
                            _id: formResponse._id,
                            form: {
                                id: formResponse.form.id,
                                title: formResponse.form.title,
                                tagName: formResponse.form.tagName,
                                complete: formResponse.form.complete
                            },
                            items: [],
                            events: [],
                            location: formResponse.location,
                            type: "response",
                            caseId: formResponse.caseId,
                            eventId: formResponse.eventId,
                            eventFormId: formResponse.eventFormId,
                            participantId: formResponse.participantId,
                            groupId: formResponse.groupId,
                            complete: formResponse.complete,
                            tangerineModifiedOn: new Date().getTime()
                        });
                        yield this.tangyFormService.saveResponse(archivedFormResponse);
                    }
                    this.deleteEventForm(caseEventId, eventFormId);
                    yield this.save();
                }
            }
        });
    }
    /*
     * Participant API
     */
    createParticipant(caseRoleId = '') {
        const id = Object(uuid__WEBPACK_IMPORTED_MODULE_5__["v4"])();
        const data = {};
        const caseParticipant = {
            id,
            caseRoleId,
            data
        };
        this.case.participants.push(caseParticipant);
        for (let caseEvent of this.case.events) {
            const caseEventDefinition = this
                .caseDefinition
                .eventDefinitions
                .find(eventDefinition => eventDefinition.id === caseEvent.caseEventDefinitionId);
            for (let eventFormDefinition of caseEventDefinition.eventFormDefinitions) {
                if (eventFormDefinition.forCaseRole.split(',').map(e => e.trim()).includes(caseRoleId)
                    &&
                        (eventFormDefinition.autoPopulate ||
                            (eventFormDefinition.autoPopulate === undefined && eventFormDefinition.required === true))) {
                    this.createEventForm(caseEvent.id, eventFormDefinition.id, caseParticipant.id);
                }
            }
        }
        return caseParticipant;
    }
    setParticipantData(participantId, key, value) {
        const index = this.case.participants.findIndex(participant => participant.id === participantId);
        this.case.participants[index].data[key] = value;
    }
    getParticipantData(participantId, key) {
        return this.case.participants.find(participant => participant.id === participantId).data[key];
    }
    addParticipant(caseParticipant) {
        this.case.participants.push(caseParticipant);
        for (let caseEvent of this.case.events) {
            const caseEventDefinition = this
                .caseDefinition
                .eventDefinitions
                .find(eventDefinition => eventDefinition.id === caseEvent.caseEventDefinitionId);
            for (let eventFormDefinition of caseEventDefinition.eventFormDefinitions) {
                if (eventFormDefinition.forCaseRole.split(',').map(e => e.trim()).includes(caseParticipant.caseRoleId)
                    &&
                        (eventFormDefinition.autoPopulate ||
                            (eventFormDefinition.autoPopulate === undefined && eventFormDefinition.required === true))) {
                    this.createEventForm(caseEvent.id, eventFormDefinition.id, caseParticipant.id);
                }
            }
        }
    }
    activateParticipant(participantId) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.case = Object.assign(Object.assign({}, this.case), { participants: this.case.participants.map(participant => {
                    return participant.id === participantId
                        ? Object.assign(Object.assign({}, participant), { inactive: false }) : participant;
                }) });
        });
    }
    deactivateParticipant(participantId) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.case = Object.assign(Object.assign({}, this.case), { participants: this.case.participants.map(participant => {
                    return participant.id === participantId
                        ? Object.assign(Object.assign({}, participant), { inactive: true }) : participant;
                }) });
        });
    }
    getParticipantFromAnotherCase(sourceCaseId, sourceParticipantId) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const currCaseId = this.case._id;
            yield this.load(sourceCaseId);
            const sourceCase = this.case;
            const sourceParticipant = sourceCase.participants.find(sourceParticipant => sourceParticipant.id === sourceParticipantId);
            yield this.load(currCaseId);
            return sourceParticipant;
        });
    }
    deleteParticipantInAnotherCase(sourceCaseId, sourceParticipantId) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const currCaseId = this.case._id;
            yield this.load(sourceCaseId);
            this.case.participants = this.case.participants.filter(sourceParticipant => sourceParticipant.id === sourceParticipantId);
            yield this.save();
            yield this.load(currCaseId);
        });
    }
    copyParticipantFromAnotherCase(sourceCaseId, sourceParticipantId) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const caseParticipant = yield this.getParticipantFromAnotherCase(sourceCaseId, sourceParticipantId);
            if (caseParticipant !== undefined) {
                this.addParticipant(caseParticipant);
            }
        });
    }
    moveParticipantFromAnotherCase(sourceCaseId, sourceParticipantId) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const caseParticipant = yield this.getParticipantFromAnotherCase(sourceCaseId, sourceParticipantId);
            if (caseParticipant !== undefined) {
                this.addParticipant(caseParticipant);
                // Only delete the participant from the other case after adding it to this case is successful
                yield this.deleteParticipantInAnotherCase(sourceCaseId, sourceParticipantId);
            }
        });
    }
    searchForParticipant(username, phrase, limit = 50, skip = 0, unique = true) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const db = yield window['T'].user.getUserDatabase(username);
            const result = yield db.query('participantSearch', phrase
                ? {
                    startkey: `${phrase}`.toLocaleLowerCase(),
                    endkey: `${phrase}\uffff`.toLocaleLowerCase(),
                    include_docs: true,
                    limit,
                    skip
                }
                : {
                    include_docs: true,
                    limit,
                    skip
                });
            const searchResults = result.rows.map(row => {
                return Object.assign(Object.assign({}, row.value), { case: row.doc, participant: row.doc.participants.find(p => p.id === row.value.participantId) });
            });
            // Deduplicate the search results since the same case may match on multiple variables.
            return unique
                ? searchResults.reduce((uniqueResults, result) => {
                    return uniqueResults.find(x => x.participantId === result.participantId)
                        ? uniqueResults
                        : [...uniqueResults, result];
                }, [])
                : searchResults;
        });
    }
    /*
     * Notification API
     */
    createNotification(label = '', description = '', link = '', icon = 'notification_important', color = '#CCC', persist = false, enforceAttention = false) {
        const notification = {
            id: Object(uuid__WEBPACK_IMPORTED_MODULE_5__["v4"])(),
            status: _classes_notification_class__WEBPACK_IMPORTED_MODULE_2__["NotificationStatus"].Open,
            createdAppContext: src_app_app_context_enum__WEBPACK_IMPORTED_MODULE_8__["AppContext"].Client,
            createdOn: Date.now(),
            label,
            description,
            link,
            icon,
            color,
            enforceAttention,
            persist
        };
        this.case.notifications.push(notification);
    }
    openNotification(notificationId) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.case.notifications = this.case.notifications.map(notification => {
                return notification.id === notificationId
                    ? Object.assign(Object.assign({}, notification), { status: _classes_notification_class__WEBPACK_IMPORTED_MODULE_2__["NotificationStatus"].Open })
                    : notification;
            });
        });
    }
    closeNotification(notificationId) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.case.notifications = this.case.notifications.map(notification => {
                return notification.id === notificationId
                    ? Object.assign(Object.assign({}, notification), { status: _classes_notification_class__WEBPACK_IMPORTED_MODULE_2__["NotificationStatus"].Closed })
                    : notification;
            });
        });
    }
}
CaseService.ɵfac = function CaseService_Factory(t) { return new (t || CaseService)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵinject"](src_app_tangy_forms_tangy_form_service__WEBPACK_IMPORTED_MODULE_9__["TangyFormService"]), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵinject"](_case_definitions_service__WEBPACK_IMPORTED_MODULE_10__["CaseDefinitionsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵinject"](_shared_services_app_config_service__WEBPACK_IMPORTED_MODULE_11__["AppConfigService"]), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_12__["HttpClient"])); };
CaseService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjectable"]({ token: CaseService, factory: CaseService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵsetClassMetadata"](CaseService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: src_app_tangy_forms_tangy_form_service__WEBPACK_IMPORTED_MODULE_9__["TangyFormService"] }, { type: _case_definitions_service__WEBPACK_IMPORTED_MODULE_10__["CaseDefinitionsService"] }, { type: _shared_services_app_config_service__WEBPACK_IMPORTED_MODULE_11__["AppConfigService"] }, { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_12__["HttpClient"] }]; }, null); })();
// @TODO We should revisit this logic. Not sure it's what we want.
const markQualifyingCaseAsComplete = ({ caseInstance, caseDefinition }) => {
    // Check to see if all required Events are complete in Case. If so, mark Case complete.
    let numberOfCaseEventsRequired = caseDefinition
        .eventDefinitions
        .reduce((acc, definition) => definition.required ? acc + 1 : acc, 0);
    let numberOfUniqueCompleteCaseEvents = caseInstance
        .events
        .reduce((acc, instance) => instance.complete === true
        ? Array.from(new Set([...acc, instance.caseEventDefinitionId]))
        : acc, [])
        .length;
    caseInstance
        .complete = numberOfCaseEventsRequired === numberOfUniqueCompleteCaseEvents ? true : false;
    return { caseInstance, caseDefinition };
};
const markQualifyingEventsAsComplete = ({ caseInstance, caseDefinition }) => {
    return {
        caseInstance: Object.assign(Object.assign({}, caseInstance), { events: caseInstance.events.map(event => {
                return Object.assign(Object.assign({}, event), { complete: !caseDefinition
                        .eventDefinitions
                        .find(eventDefinition => eventDefinition.id === event.caseEventDefinitionId)
                        .eventFormDefinitions
                        .some(eventFormDefinition => {
                        // 1. Is required and has no Event Form instances.
                        return (eventFormDefinition.required === true &&
                            !event.eventForms.some(eventForm => eventForm.eventFormDefinitionId === eventFormDefinition.id)) ||
                            // 2. Is required and at least one Event Form instance is not complete.
                            (eventFormDefinition.required === true &&
                                event.eventForms
                                    .filter(eventForm => eventForm.eventFormDefinitionId === eventFormDefinition.id)
                                    .some(eventForm => !eventForm.complete)) ||
                            // 3. Is not required and has at least one Event Form instance that is both incomplete and required.
                            (eventFormDefinition.required === false &&
                                event.eventForms
                                    .filter(eventForm => eventForm.eventFormDefinitionId === eventFormDefinition.id)
                                    .some(eventForm => !eventForm.complete && eventForm.required));
                    }) });
            }) }),
        caseDefinition
    };
};



/***/ }),

/***/ "9u36":
/*!**************************************************!*\
  !*** ../tangy-form/tangy-form-response-model.js ***!
  \**************************************************/
/*! exports provided: TangyFormResponseModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TangyFormResponseModel", function() { return TangyFormResponseModel; });
class TangyFormResponseModel {
  constructor(props) {
    this._id = uuid()
    this.collection = 'TangyFormResponse'
    // Placeholders for where element.getProps() info will go.
    this.form = {}
    this.items = []
    // States.
    this.complete = false
    this.hasUnlocked = false
    // Focus indexes.
    // @TODO: We can probably get rid of these indexes.
    this.focusIndex = 0
    this.nextFocusIndex = 1 
    this.previousFocusIndex =  -1
    // Info.
    this.startDatetime = (new Date()).toLocaleString(),
    this.startUnixtime = Date.now(),
    this.uploadDatetime = ''
    this.location = {}
    this.type = 'response'
    if (props && props.hasOwnProperty('inputs')) delete props.inputs
    Object.assign(this, props)
  }

  get inputs() {
    // Reduce to an array.
    return this.items.reduce((inputsArray, item) => {
      item.inputs.forEach(input => {
        if (input.tagName === 'TANGY-CARDS') {
          input.value.forEach(card => card.value.forEach(input => inputsArray.push(input)))
        } else {
          inputsArray.push(input)
        }
      })
      return inputsArray
    }, [])
  }

  get inputsByName() {
    // Reduce to an object keyed on input.name. If multiple inputs with the same name, put them in an array.
    return this.inputs.reduce((inputsObject, input) => {
      if (inputsObject.hasOwnProperty(input.name)) {
        if (Array.isArray(inputsObject[input.name])) {
          inputsObject[input.name] = inputsObject[input.name].push(input)
        } else {
          inputsObject[input.name] = [input, inputsObject[input.name]]
        }
      } else {
        inputsObject[input.name] = input
      }
      return inputsObject
    }, {})
  }

  get(name) {
    let value = ''
    let foundInput = this.inputsByName[name]
    if (foundInput && typeof foundInput.value === 'object') {
      let values = []
      foundInput.value.forEach(subInput => {
        if (subInput.value) {
          values.push(subInput.name)
        }
      })
      value = values
    } else if (foundInput && foundInput.value !== undefined) {
      value = foundInput.value
    }
    // Return radio buttons as a single value chosen, not a single entry array.
    if (foundInput && foundInput.tagName === 'TANGY-RADIO-BUTTONS' && Array.isArray(value)) {
      value = (value.length > 0) ? value[0] : ''
    }
    if (!value) {
      value = ''
    }
    return value
  }

  set(name, value) {
    if (this.inputsByName[name]) {
      this.inputsByName[name].value = this.inputsByName[name].tagName === 'TANGY-RADIO-BUTTONS'
        ? this.inputsByName[name].value.map(option => {
            option.name === value
              ? 'on'
              : ''
          })
        : value
    } else {
      this.items[0].inputs.push({
        name,
        value
      })
    }
  }

}

function uuid() {
  var uuid = "", i, random;
  for (i = 0; i < 32; i++) {
    random = Math.random() * 16 | 0;

    if (i == 8 || i == 12 || i == 16 || i == 20) {
      uuid += "-"
    }
    uuid += (i == 12 ? 4 : (i == 16 ? (random & 3 | 8) : random)).toString(16);
  }
  return uuid;
}


/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "DJr2":
/*!***********************************************************!*\
  !*** ./src/app/tangy-forms/tangy-forms-routing.module.ts ***!
  \***********************************************************/
/*! exports provided: TangyFormsRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TangyFormsRoutingModule", function() { return TangyFormsRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _tangy_forms_player_tangy_forms_player_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tangy-forms-player/tangy-forms-player.component */ "RTZb");





const routes = [{
        path: 'tangy-form-player',
        component: _tangy_forms_player_tangy_forms_player_component__WEBPACK_IMPORTED_MODULE_2__["TangyFormsPlayerComponent"]
    }
];
class TangyFormsRoutingModule {
}
TangyFormsRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: TangyFormsRoutingModule });
TangyFormsRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function TangyFormsRoutingModule_Factory(t) { return new (t || TangyFormsRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](TangyFormsRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TangyFormsRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "DbiD":
/*!***************************************************!*\
  !*** ./src/app/tangy-forms/tangy-form.service.ts ***!
  \***************************************************/
/*! exports provided: TangyFormService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TangyFormService", function() { return TangyFormService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _shared_classes_user_database_class__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/classes/user-database.class */ "gYqp");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _tangy_forms_info_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./tangy-forms-info-service */ "Nqbn");






class TangyFormService {
    constructor(httpClient, tangyFormsInfoService) {
        this.httpClient = httpClient;
        this.tangyFormsInfoService = tangyFormsInfoService;
        this.formsMarkup = [];
        this.databaseName = 'tangy-forms';
    }
    initialize(groupId) {
        this.userId = sessionStorage.getItem('user_id') || 'Survey';
        this.db = new _shared_classes_user_database_class__WEBPACK_IMPORTED_MODULE_1__["UserDatabase"](this.userId, groupId);
    }
    // Would be nice if this was queue based so if two saves get called at the same time, the differentials are sequentials updated
    // into the database. Using a getter and setter for property fields, this would be one way to queue.
    saveResponse(response) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            try {
                const doc = yield this.db.post(response);
                return doc;
            }
            catch (e) {
                return false;
            }
        });
    }
    getResponse(responseId) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            try {
                const doc = yield this.db.get(responseId);
                return doc;
            }
            catch (e) {
                return false;
            }
        });
    }
    getAllResponses() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            return [];
        });
    }
    getResponsesByFormId(formId, limit = 99999999, skip = 0) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            return yield this.httpClient.get(`/api/${this.groupId}/responsesByFormId/${formId}/${limit}/${skip}`).toPromise();
            /*
            return Array<TangyFormResponseModel>(<Array<any>>await this.httpClient.get(`/api/${groupId}/responsesByFormId/${formId}/${limit}/${skip}`).toPromise())
              .map((doc) => new TangyFormResponseModel(doc))
            */
        });
    }
    /**
     * Gets markup for a form. If displaying a formResponse, populate the revision in order to display the correct form version.
     * @param formId
     * @param formVersionId - Uses this value to lookup the correct version to display. It is null if creating a new response.
     */
    getFormMarkup(formId, formVersionId = '') {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            let formMarkup;
            let src = yield this.tangyFormsInfoService.getFormSrc(formId, formVersionId);
            formMarkup = yield this.httpClient.get(src, { responseType: 'text' }).toPromise();
            return formMarkup;
        });
    }
}
TangyFormService.ɵfac = function TangyFormService_Factory(t) { return new (t || TangyFormService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_tangy_forms_info_service__WEBPACK_IMPORTED_MODULE_4__["TangyFormsInfoService"])); };
TangyFormService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: TangyFormService, factory: TangyFormService.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](TangyFormService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }, { type: _tangy_forms_info_service__WEBPACK_IMPORTED_MODULE_4__["TangyFormsInfoService"] }]; }, null); })();


/***/ }),

/***/ "E88P":
/*!***********************************************************!*\
  !*** ./src/app/case/services/case-definitions.service.ts ***!
  \***********************************************************/
/*! exports provided: CaseDefinitionsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CaseDefinitionsService", function() { return CaseDefinitionsService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");




class CaseDefinitionsService {
    constructor(http) {
        this.http = http;
    }
    load() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.caseDefinitionReferences = this.caseDefinitionReferences ? this.caseDefinitionReferences : yield this.http.get('./assets/case-definitions.json').toPromise();
            if (!this.caseDefinitions) {
                this.caseDefinitions = [];
                for (const reference of this.caseDefinitionReferences) {
                    const definition = yield this.http.get(reference.src).toPromise();
                    this.caseDefinitions.push(definition);
                }
            }
            return this.caseDefinitions;
        });
    }
}
CaseDefinitionsService.ɵfac = function CaseDefinitionsService_Factory(t) { return new (t || CaseDefinitionsService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"])); };
CaseDefinitionsService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: CaseDefinitionsService, factory: CaseDefinitionsService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](CaseDefinitionsService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "Er1b":
/*!****************************************************!*\
  !*** ./src/app/forms-list/forms-list.component.ts ***!
  \****************************************************/
/*! exports provided: FormsListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormsListComponent", function() { return FormsListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/tabs */ "wZkO");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/list */ "MutI");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "ofXK");









function FormsListComponent_mat_list_item_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-list-item", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "a", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "i", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "play_circle_filled");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "span", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const form_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate1"]("routerLink", "/form/", form_r2.id, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("innerHTML", form_r2.title, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeHtml"]);
} }
function FormsListComponent_p_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"]("No Forms Currently Defined");
} }
class FormsListComponent {
    constructor(httpClient, router) {
        this.httpClient = httpClient;
        this.router = router;
    }
    ngOnInit() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const forms = yield this.httpClient.get('./assets/forms.json').toPromise();
            if (forms.length > 1) {
                this.formsList = forms;
            }
            else {
                this.router.navigate([`/tangy-forms/new/${forms[0].id}`]);
            }
        });
    }
}
FormsListComponent.ɵfac = function FormsListComponent_Factory(t) { return new (t || FormsListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"])); };
FormsListComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: FormsListComponent, selectors: [["app-forms-list"]], decls: 9, vars: 4, consts: [[3, "label"], [1, "tangy-card-content-container"], ["role", "list"], ["role", "listitem", 1, "tangy-location-list"], [1, "tangy-foreground-primary"], ["role", "listitem", "class", "tangy-location-list", 4, "ngFor", "ngForOf"], ["class", "mat-h3", 4, "ngIf"], [1, "tangy-foreground-primary", 3, "routerLink"], [1, "material-icons", "md-24", "tangy-location-list-icon"], [3, "innerHTML"], [1, "mat-h3"]], template: function FormsListComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-tab-group");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "mat-tab", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "mat-card", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "mat-list", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "mat-list-item", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](7, FormsListComponent_mat_list_item_7_Template, 5, 2, "mat-list-item", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](8, FormsListComponent_p_8_Template, 2, 1, "p", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("label", "My Surveys");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"]("Select Survey Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.formsList);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", (ctx.formsList == null ? null : ctx.formsList.length) < 1);
    } }, directives: [_angular_material_tabs__WEBPACK_IMPORTED_MODULE_4__["MatTabGroup"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_4__["MatTab"], _angular_material_card__WEBPACK_IMPORTED_MODULE_5__["MatCard"], _angular_material_list__WEBPACK_IMPORTED_MODULE_6__["MatList"], _angular_material_list__WEBPACK_IMPORTED_MODULE_6__["MatListItem"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkWithHref"]], styles: [".tangy-foreground-primary[_ngcontent-%COMP%] {\n    font-weight: 700;\n    font-size: 18px;\n    text-transform: capitalize;\n  }\n  \n  .tangy-location-list-icon[_ngcontent-%COMP%] {\n    color: #f26f10;\n    font-weight: 700;\n    font-size: 3rem;\n  }\n  \n  mat-list[_ngcontent-%COMP%] {\n    display:block;\n    width: 100%;\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZm9ybXMtbGlzdC9mb3Jtcy1saXN0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxnQkFBZ0I7SUFDaEIsZUFBZTtJQUNmLDBCQUEwQjtFQUM1Qjs7RUFFQTtJQUNFLGNBQWM7SUFDZCxnQkFBZ0I7SUFDaEIsZUFBZTtFQUNqQjs7RUFFQTtJQUNFLGFBQWE7SUFDYixXQUFXO0VBQ2IiLCJmaWxlIjoic3JjL2FwcC9mb3Jtcy1saXN0L2Zvcm1zLWxpc3QuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi50YW5neS1mb3JlZ3JvdW5kLXByaW1hcnkge1xuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgZm9udC1zaXplOiAxOHB4O1xuICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xuICB9XG4gIFxuICAudGFuZ3ktbG9jYXRpb24tbGlzdC1pY29uIHtcbiAgICBjb2xvcjogI2YyNmYxMDtcbiAgICBmb250LXdlaWdodDogNzAwO1xuICAgIGZvbnQtc2l6ZTogM3JlbTtcbiAgfVxuICBcbiAgbWF0LWxpc3Qge1xuICAgIGRpc3BsYXk6YmxvY2s7XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cbiAgXG4gICJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](FormsListComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-forms-list',
                templateUrl: './forms-list.component.html',
                styleUrls: ['./forms-list.component.css']
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }]; }, null); })();


/***/ }),

/***/ "FtMy":
/*!**************************************************!*\
  !*** ./src/app/core/auth/auth-routing.module.ts ***!
  \**************************************************/
/*! exports provided: AuthRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthRoutingModule", function() { return AuthRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _components_survey_login_survey_login_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_components/survey-login/survey-login.component */ "Rl5o");





const routes = [
    {
        path: 'survey-login',
        component: _components_survey_login_survey_login_component__WEBPACK_IMPORTED_MODULE_2__["SurveyLoginComponent"]
    }
];
class AuthRoutingModule {
}
AuthRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AuthRoutingModule });
AuthRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AuthRoutingModule_Factory(t) { return new (t || AuthRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AuthRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "If3t":
/*!********************************************!*\
  !*** ./src/app/case/classes/case.class.ts ***!
  \********************************************/
/*! exports provided: Case */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Case", function() { return Case; });
/* harmony import */ var tangy_form_tangy_form_response_model_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tangy-form/tangy-form-response-model.js */ "9u36");

class Case extends tangy_form_tangy_form_response_model_js__WEBPACK_IMPORTED_MODULE_0__["TangyFormResponseModel"] {
    constructor(data) {
        super();
        this.participants = [];
        this.disabledEventDefinitionIds = [];
        this.events = [];
        this.notifications = [];
        this.type = 'case';
        Object.assign(this, data);
    }
}



/***/ }),

/***/ "LceX":
/*!******************************************!*\
  !*** ./src/app/core/auth/auth.module.ts ***!
  \******************************************/
/*! exports provided: AuthModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthModule", function() { return AuthModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/list */ "MutI");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/select */ "d3UM");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/table */ "+0xr");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/platform-browser/animations */ "R1ws");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../shared/shared.module */ "PCNd");
/* harmony import */ var _auth_routing_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./auth-routing.module */ "FtMy");
/* harmony import */ var _components_survey_login_survey_login_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./_components/survey-login/survey-login.component */ "Rl5o");
/* harmony import */ var _guards_login_guard_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./_guards/login-guard.service */ "7jmW");
/* harmony import */ var _services_authentication_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./_services/authentication.service */ "QOv3");
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/checkbox */ "bSwM");
/* harmony import */ var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/autocomplete */ "/1cH");


















class AuthModule {
}
AuthModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AuthModule });
AuthModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AuthModule_Factory(t) { return new (t || AuthModule)(); }, providers: [_services_authentication_service__WEBPACK_IMPORTED_MODULE_14__["AuthenticationService"], _guards_login_guard_service__WEBPACK_IMPORTED_MODULE_13__["LoginGuard"]], imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_10__["SharedModule"],
            _angular_material_list__WEBPACK_IMPORTED_MODULE_6__["MatListModule"],
            _angular_material_input__WEBPACK_IMPORTED_MODULE_5__["MatInputModule"],
            _angular_material_button__WEBPACK_IMPORTED_MODULE_3__["MatButtonModule"],
            _angular_material_select__WEBPACK_IMPORTED_MODULE_7__["MatSelectModule"],
            _angular_material_card__WEBPACK_IMPORTED_MODULE_4__["MatCardModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__["BrowserAnimationsModule"],
            _auth_routing_module__WEBPACK_IMPORTED_MODULE_11__["AuthRoutingModule"],
            _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_16__["MatAutocompleteModule"],
            _angular_material_table__WEBPACK_IMPORTED_MODULE_8__["MatTableModule"],
            _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_15__["MatCheckboxModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AuthModule, { declarations: [_components_survey_login_survey_login_component__WEBPACK_IMPORTED_MODULE_12__["SurveyLoginComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
        _shared_shared_module__WEBPACK_IMPORTED_MODULE_10__["SharedModule"],
        _angular_material_list__WEBPACK_IMPORTED_MODULE_6__["MatListModule"],
        _angular_material_input__WEBPACK_IMPORTED_MODULE_5__["MatInputModule"],
        _angular_material_button__WEBPACK_IMPORTED_MODULE_3__["MatButtonModule"],
        _angular_material_select__WEBPACK_IMPORTED_MODULE_7__["MatSelectModule"],
        _angular_material_card__WEBPACK_IMPORTED_MODULE_4__["MatCardModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__["BrowserAnimationsModule"],
        _auth_routing_module__WEBPACK_IMPORTED_MODULE_11__["AuthRoutingModule"],
        _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_16__["MatAutocompleteModule"],
        _angular_material_table__WEBPACK_IMPORTED_MODULE_8__["MatTableModule"],
        _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_15__["MatCheckboxModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AuthModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["CUSTOM_ELEMENTS_SCHEMA"]],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
                    _shared_shared_module__WEBPACK_IMPORTED_MODULE_10__["SharedModule"],
                    _angular_material_list__WEBPACK_IMPORTED_MODULE_6__["MatListModule"],
                    _angular_material_input__WEBPACK_IMPORTED_MODULE_5__["MatInputModule"],
                    _angular_material_button__WEBPACK_IMPORTED_MODULE_3__["MatButtonModule"],
                    _angular_material_select__WEBPACK_IMPORTED_MODULE_7__["MatSelectModule"],
                    _angular_material_card__WEBPACK_IMPORTED_MODULE_4__["MatCardModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                    _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__["BrowserAnimationsModule"],
                    _auth_routing_module__WEBPACK_IMPORTED_MODULE_11__["AuthRoutingModule"],
                    _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_16__["MatAutocompleteModule"],
                    _angular_material_table__WEBPACK_IMPORTED_MODULE_8__["MatTableModule"],
                    _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_15__["MatCheckboxModule"]
                ],
                declarations: [_components_survey_login_survey_login_component__WEBPACK_IMPORTED_MODULE_12__["SurveyLoginComponent"]],
                providers: [_services_authentication_service__WEBPACK_IMPORTED_MODULE_14__["AuthenticationService"], _guards_login_guard_service__WEBPACK_IMPORTED_MODULE_13__["LoginGuard"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "MB+D":
/*!*************************************!*\
  !*** ./src/app/app-context.enum.ts ***!
  \*************************************/
/*! exports provided: AppContext */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppContext", function() { return AppContext; });
var AppContext;
(function (AppContext) {
    AppContext["Editor"] = "EDITOR";
    AppContext["Client"] = "CLIENT";
})(AppContext || (AppContext = {}));


/***/ }),

/***/ "Nqbn":
/*!*********************************************************!*\
  !*** ./src/app/tangy-forms/tangy-forms-info-service.ts ***!
  \*********************************************************/
/*! exports provided: TangyFormsInfoService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TangyFormsInfoService", function() { return TangyFormsInfoService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");




class TangyFormsInfoService {
    constructor(http) {
        this.http = http;
        this.formsMarkup = [];
    }
    getFormsInfo() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.formsInfo = this.formsInfo ? this.formsInfo : yield this.http.get('./assets/forms.json').toPromise();
            return this.formsInfo;
        });
    }
    getFormInfo(id) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            return (yield this.getFormsInfo()).find(formInfo => formInfo.id === id);
        });
    }
    getFormTemplateMarkup(formId, formTemplateId) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const formInfo = yield this.getFormInfo(formId);
            const formTemplate = formInfo.templates.find(formTemplate => formTemplate.id === formTemplateId);
            const formTemplateMarkup = yield this.http.get(formTemplate.src, { responseType: 'text' }).toPromise();
            return formTemplateMarkup;
        });
    }
    getFormSrc(formId, formVersionId = '') {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const formInfo = yield this.getFormInfo(formId);
            return formVersionId
                ? formInfo.formVersions.find(formVersion => formVersion.id === formVersionId).src
                : formInfo.src;
        });
    }
}
TangyFormsInfoService.ɵfac = function TangyFormsInfoService_Factory(t) { return new (t || TangyFormsInfoService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"])); };
TangyFormsInfoService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: TangyFormsInfoService, factory: TangyFormsInfoService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](TangyFormsInfoService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "OavG":
/*!**************************************************!*\
  !*** ./src/app/shared/_services/xapi.service.ts ***!
  \**************************************************/
/*! exports provided: XapiService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "XapiService", function() { return XapiService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");





class XapiService {
    constructor(http) {
        this.http = http;
    }
    getHeaders(auth) {
        return new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
            'Content-Type': 'application/json',
            'Authorization': 'Basic ' + btoa(auth)
        });
    }
    sendStatement(statement, lrsEndpointUrl, auth) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const headers = this.getHeaders(auth);
            let endpoint = lrsEndpointUrl + "/statements";
            try {
                yield this.http.post(endpoint, statement, { headers }).toPromise();
            }
            catch (err) {
                console.warn('Failed to send, saving offline', err);
            }
        });
    }
    ;
}
XapiService.ɵfac = function XapiService_Factory(t) { return new (t || XapiService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"])); };
XapiService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: XapiService, factory: XapiService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](XapiService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "PCNd":
/*!*****************************************!*\
  !*** ./src/app/shared/shared.module.ts ***!
  \*****************************************/
/*! exports provided: HttpClientLoaderFactory, SharedModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpClientLoaderFactory", function() { return HttpClientLoaderFactory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedModule", function() { return SharedModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");
/* harmony import */ var _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngx-translate/http-loader */ "mqiu");







function HttpClientLoaderFactory(httpClient) {
    return new _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_4__["TranslateHttpLoader"](httpClient, './assets/', '.json');
}
class SharedModule {
}
SharedModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: SharedModule });
SharedModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function SharedModule_Factory(t) { return new (t || SharedModule)(); }, providers: [], imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateModule"].forRoot({
                loader: {
                    provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateLoader"],
                    useFactory: HttpClientLoaderFactory,
                    deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]]
                }
            })
        ], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](SharedModule, { imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateModule"]], exports: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](SharedModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["CUSTOM_ELEMENTS_SCHEMA"]],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
                    _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateModule"].forRoot({
                        loader: {
                            provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateLoader"],
                            useFactory: HttpClientLoaderFactory,
                            deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]]
                        }
                    })
                ],
                providers: [],
                declarations: [],
                exports: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "PiYG":
/*!********************************************************!*\
  !*** ./src/app/shared/_services/app-config.service.ts ***!
  \********************************************************/
/*! exports provided: AppConfigService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppConfigService", function() { return AppConfigService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var tangy_form_util_loc_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tangy-form/util/loc.js */ "g1mA");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "tk/3");





class AppConfigService {
    constructor(httpClient) {
        this.httpClient = httpClient;
    }
    getAppConfig() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            try {
                const data = yield this.httpClient.get('./assets/app-config.json').toPromise();
                return data;
            }
            catch (error) {
                console.error(error);
                return { appName: '' };
            }
        });
    }
    getAppName() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            return (yield this.getAppConfig()).appName;
        });
    }
    getFlatLocationList() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.locationList = this.locationList || (yield this.httpClient.get('./assets/location-list.json').toPromise());
            this.flatLocationList = this.flatLocationList || tangy_form_util_loc_js__WEBPACK_IMPORTED_MODULE_2__["Loc"].flatten(JSON.parse(JSON.stringify(this.locationList)));
            return this.flatLocationList;
        });
    }
}
AppConfigService.ɵfac = function AppConfigService_Factory(t) { return new (t || AppConfigService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"])); };
AppConfigService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: AppConfigService, factory: AppConfigService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppConfigService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "QOv3":
/*!***************************************************************!*\
  !*** ./src/app/core/auth/_services/authentication.service.ts ***!
  \***************************************************************/
/*! exports provided: AuthenticationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthenticationService", function() { return AuthenticationService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var jwt_decode__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! jwt-decode */ "92GA");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var src_app_shared_services_app_config_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/_services/app-config.service */ "PiYG");







class AuthenticationService {
    constructor(http, appConfigService) {
        this.http = http;
        this.appConfigService = appConfigService;
        this.currentUserLoggedIn$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
    }
    surveyLogin(accessCode) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const appConfig = yield this.appConfigService.getAppConfig();
            const groupId = appConfig['groupId'];
            try {
                const data = yield this.http.post(`/onlineSurvey/login/${groupId}/${accessCode}`, { groupId, accessCode }, { observe: 'response' }).toPromise();
                if (data.status === 200) {
                    const token = data.body['data']['token'];
                    yield this.setTokens(token);
                    return true;
                }
                else {
                    return false;
                }
            }
            catch (error) {
                console.error(error);
                sessionStorage.removeItem('token');
                sessionStorage.removeItem('user_id');
                sessionStorage.removeItem('password');
                sessionStorage.removeItem('permissions');
                return false;
            }
        });
    }
    isLoggedIn() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this._currentUserLoggedIn = false;
            this._currentUserLoggedIn = !!sessionStorage.getItem('user_id');
            this.currentUserLoggedIn$.next(this._currentUserLoggedIn);
            return this._currentUserLoggedIn;
        });
    }
    logout() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            sessionStorage.removeItem('token');
            sessionStorage.removeItem('user_id');
            sessionStorage.removeItem('password');
            sessionStorage.removeItem('permissions');
            document.cookie = "Authorization=;max-age=-1";
            this._currentUserLoggedIn = false;
            this.currentUserLoggedIn$.next(this._currentUserLoggedIn);
        });
    }
    extendUserSession() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const appConfig = yield this.appConfigService.getAppConfig();
            const groupId = appConfig['groupId'];
            const accessCode = sessionStorage.getItem('user_id');
            try {
                const data = yield this.http.post(`/onlineSurvey/login/${groupId}/${accessCode}`, { groupId, accessCode }, { observe: 'response' }).toPromise();
                if (data.status === 200) {
                    const token = data.body['data']['token'];
                    yield this.setTokens(token);
                    return true;
                }
                else {
                    return false;
                }
            }
            catch (error) {
                console.log(error);
                return false;
            }
        });
    }
    setTokens(token) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const jwtData = Object(jwt_decode__WEBPACK_IMPORTED_MODULE_3__["jwtDecode"])(token);
            document.cookie = "Authorization=;max-age=-1";
            sessionStorage.setItem('token', token);
            sessionStorage.setItem('user_id', jwtData['username']);
            sessionStorage.setItem('permissions', JSON.stringify(jwtData['permissions']));
            document.cookie = `Authorization=${token}`;
        });
    }
    getCustomLoginMarkup() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            try {
                return yield this.http.get('./assets/custom-login-markup.html', { responseType: 'text' }).toPromise();
            }
            catch (error) {
                console.error('No custom-login-markup found');
                return '';
            }
        });
    }
}
AuthenticationService.ɵfac = function AuthenticationService_Factory(t) { return new (t || AuthenticationService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](src_app_shared_services_app_config_service__WEBPACK_IMPORTED_MODULE_5__["AppConfigService"])); };
AuthenticationService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: AuthenticationService, factory: AuthenticationService.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AuthenticationService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"] }, { type: src_app_shared_services_app_config_service__WEBPACK_IMPORTED_MODULE_5__["AppConfigService"] }]; }, null); })();


/***/ }),

/***/ "QPKl":
/*!*****************************************************************!*\
  !*** ./src/app/shared/_services/tangy-error-handler.service.ts ***!
  \*****************************************************************/
/*! exports provided: TangyErrorHandler */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TangyErrorHandler", function() { return TangyErrorHandler; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _translation_marker__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./translation-marker */ "xoem");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/snack-bar */ "dNgK");




class TangyErrorHandler {
    constructor(snackbar) {
        this.snackbar = snackbar;
    }
    handleError(error, duration = 10000) {
        this.snackbar.open(error, Object(_translation_marker__WEBPACK_IMPORTED_MODULE_1__["_TRANSLATE"])('Close'), { duration });
    }
}
TangyErrorHandler.ɵfac = function TangyErrorHandler_Factory(t) { return new (t || TangyErrorHandler)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_2__["MatSnackBar"])); };
TangyErrorHandler.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: TangyErrorHandler, factory: TangyErrorHandler.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TangyErrorHandler, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_2__["MatSnackBar"] }]; }, null); })();


/***/ }),

/***/ "RTZb":
/*!********************************************************************************!*\
  !*** ./src/app/tangy-forms/tangy-forms-player/tangy-forms-player.component.ts ***!
  \********************************************************************************/
/*! exports provided: TangyFormsPlayerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TangyFormsPlayerComponent", function() { return TangyFormsPlayerComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_model_xapi_actor_base_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/model/xapi-actor-base.model */ "TXql");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_app_shared_services_forms_service_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/_services/forms-service.service */ "mtXF");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var src_app_case_services_case_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/case/services/case.service */ "97of");
/* harmony import */ var _tangy_form_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../tangy-form.service */ "DbiD");
/* harmony import */ var src_app_shared_services_xapi_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/shared/_services/xapi.service */ "OavG");










const _c0 = ["container"];
const sleep = (milliseconds) => new Promise((res) => setTimeout(() => res(true), milliseconds));
class TangyFormsPlayerComponent {
    constructor(route, formsService, router, httpClient, caseService, tangyFormService, xapiService) {
        this.route = route;
        this.formsService = formsService;
        this.router = router;
        this.httpClient = httpClient;
        this.caseService = caseService;
        this.tangyFormService = tangyFormService;
        this.xapiService = xapiService;
        this.skipSaving = false;
        this.preventSubmit = false;
        this.xapiStatementsWithActor = [];
        this.router.events.subscribe((event) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.formId = this.route.snapshot.paramMap.get('formId');
            this.formResponseId = this.route.snapshot.paramMap.get('formResponseId');
            this.caseId = this.route.snapshot.paramMap.get('case');
            this.caseEventId = this.route.snapshot.paramMap.get('event');
            this.eventFormId = this.route.snapshot.paramMap.get('form');
        }));
    }
    ngOnInit() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.window = window;
            // we are using the query parameters to get the actor and auth information
            this.route.queryParamMap.subscribe((query) => {
                const actorRaw = query.get('actor');
                const authRaw = query.get('auth');
                this.xapiEndpoint = query.get('endpoint');
                this.xapiRegistration = query.get('registration');
                // here we parse the auth and actor query parameter
                if (actorRaw && authRaw) {
                    this.xapiAuth = authRaw;
                    const xapiActorData = JSON.parse(actorRaw);
                    this.xapiActor = src_app_model_xapi_actor_base_model__WEBPACK_IMPORTED_MODULE_2__["XapiActorBase"].fromRaw(xapiActorData);
                } else if (window.__XAPI_CONFIG__ && window.__XAPI_CONFIG__.endpoint && window.__XAPI_CONFIG__.auth) {
                    this.xapiEndpoint = window.__XAPI_CONFIG__.endpoint;
                    this.xapiAuth = window.__XAPI_CONFIG__.auth;
                    if (window.__XAPI_CONFIG__.actor) {
                        this.xapiActor = src_app_model_xapi_actor_base_model__WEBPACK_IMPORTED_MODULE_2__["XapiActorBase"].fromRaw(window.__XAPI_CONFIG__.actor);
                    }
                }
            });
            // Loading the formResponse from a case must happen before rendering the innerHTML
            let formResponse;
            if (this.caseId && this.caseEventId && this.eventFormId) {
                // Store the caseUrlHash in sessionStorage so that we can redirect to the correct page after logout -> login
                sessionStorage.setItem('caseUrlHash', `/case/event/form/${this.caseId}/${this.caseEventId}/${this.eventFormId}`);
                try {
                    const groupId = window.location.pathname.split('/')[4];
                    this.tangyFormService.initialize(groupId);
                    yield this.caseService.load(this.caseId);
                    this.caseService.setContext(this.caseEventId, this.eventFormId);
                    this.window.T = {
                        case: this.caseService,
                        tangyForms: this.tangyFormService
                    };
                    this.window.caseService = this.caseService;
                    this.metadata = {
                        caseId: this.caseId,
                        caseEventId: this.caseEventId,
                        eventFormId: this.eventFormId
                    };
                    try {
                        // Attempt to load the form response for the event form
                        const event = this.caseService.case.events.find(event => event.id === this.caseEventId);
                        if (event.id) {
                            const eventForm = event.eventForms.find(eventForm => eventForm.id === this.eventFormId);
                            if (eventForm && eventForm.id === this.eventFormId && eventForm.formResponseId) {
                                formResponse = yield this.tangyFormService.getResponse(eventForm.formResponseId);
                            }
                        }
                    }
                    catch (error) {
                        //pass
                    }
                }
                catch (error) {
                    console.log('Error loading case: ' + error);
                }
            }
            const data = yield this.httpClient.get('./assets/form/form.html', { responseType: 'text' }).toPromise();
            this.container.nativeElement.innerHTML = data;
            let tangyForm = this.container.nativeElement.querySelector('tangy-form');
            if (formResponse) {
                tangyForm.response = formResponse;
            }
            if (this.caseService) {
                tangyForm.addEventListener('TANGY_FORM_UPDATE', (event) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                    let response = event.target.store.getState();
                    this.throttledSaveResponse(response);
                    if (this.caseService.eventForm && !this.caseService.eventForm.formResponseId) {
                        this.caseService.eventForm.formResponseId = tangyForm.response._id;
                        yield this.caseService.save();
                        yield this.caseService.load(this.caseId);
                    }
                }));
                tangyForm.addEventListener('after-submit', (event) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                    event.preventDefault();
                    let response = event.target.store.getState();
                    this.xapiStatementsWithActor = [];
                    if (response && response.items) {
                        for (let item of response.items) {
                            if (item.inputs) {
                                for (let input of item.inputs) {
                                    if (input.xapiStatement) {
                                        input.xapiStatement = Object.assign(Object.assign({}, input.xapiStatement), { actor: this.xapiActor });
                                        this.xapiStatementsWithActor.push(input.xapiStatement);
                                    }
                                }
                            }
                        }
                    }
                    yield this.saveResponse(response);
                    if (this.xapiStatementsWithActor && this.xapiStatementsWithActor.length > 0 && this.xapiEndpoint && this.xapiAuth) {
                        yield this.xapiService.sendStatement(this.xapiStatementsWithActor, this.xapiEndpoint, this.xapiAuth);
                    }
                    if (this.caseService && this.caseService.caseEvent && this.caseService.eventForm) {
                        this.caseService.markEventFormComplete(this.caseService.caseEvent.id, this.caseService.eventForm.id);
                        yield this.caseService.save();
                    }
                    if (window['eventFormRedirect']) {
                        try {
                            // this.router.navigateByUrl(window['eventFormRedirect']) -- TODO figure this out later
                            this.window['location'] = window['eventFormRedirect'];
                            window['eventFormRedirect'] = '';
                        }
                        catch (error) {
                            console.error(error);
                        }
                    }
                    else {
                        this.router.navigate(['/form-submitted-success']);
                    }
                }));
            }
            else {
                tangyForm.addEventListener('after-submit', (event) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                    event.preventDefault();
                    try {
                        if (yield this.formsService.uploadFormResponse(event.target.response)) {
                            this.router.navigate(['/form-submitted-success']);
                        }
                        else {
                            alert('Form could not be submitted. Please retry');
                        }
                    }
                    catch (error) {
                        console.error(error);
                    }
                }));
            }
        });
    }
    // Prevent parallel saves which leads to race conditions. Only save the first and then last state of the store.
    // Everything else in between we can ignore.
    throttledSaveResponse(response) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            // If already loaded, return.
            if (this.throttledSaveLoaded)
                return;
            // Throttle this fire by waiting until last fire is done.
            if (this.throttledSaveFiring) {
                this.throttledSaveLoaded = true;
                while (this.throttledSaveFiring)
                    yield sleep(200);
                this.throttledSaveLoaded = false;
            }
            // Fire it.
            this.throttledSaveFiring = true;
            yield this.saveResponse(response);
            this.throttledSaveFiring = false;
        });
    }
    saveResponse(state) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            let stateDoc = yield this.tangyFormService.getResponse(state._id);
            const archiveStateChange = state.archived === stateDoc['archived'];
            if (stateDoc && stateDoc['complete'] && state.complete && stateDoc['form'] && !stateDoc['form'].hasSummary && archiveStateChange) {
                // Since what is in the database is complete, and it's still complete, and it doesn't have 
                // a summary where they might add some input, don't save! They are probably reviewing data.
                this.response = stateDoc;
            }
            else {
                // add metadata
                stateDoc = Object.assign(Object.assign(Object.assign({}, state), { location: this.location || state.location }), this.metadata);
                const updatedStateDoc = yield this.tangyFormService.saveResponse(stateDoc);
                if (updatedStateDoc) {
                    this.response = updatedStateDoc;
                    return true;
                }
            }
            return false;
        });
    }
    saveFormResponse(formResponse) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            try {
                if (!(yield this.formsService.uploadFormResponse(formResponse))) {
                    alert('Form could not be saved. Please retry');
                    return false;
                }
            }
            catch (error) {
                console.error(error);
            }
        });
    }
}
TangyFormsPlayerComponent.ɵfac = function TangyFormsPlayerComponent_Factory(t) { return new (t || TangyFormsPlayerComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_shared_services_forms_service_service__WEBPACK_IMPORTED_MODULE_4__["FormsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_case_services_case_service__WEBPACK_IMPORTED_MODULE_6__["CaseService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_tangy_form_service__WEBPACK_IMPORTED_MODULE_7__["TangyFormService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_shared_services_xapi_service__WEBPACK_IMPORTED_MODULE_8__["XapiService"])); };
TangyFormsPlayerComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: TangyFormsPlayerComponent, selectors: [["app-tangy-forms-player"]], viewQuery: function TangyFormsPlayerComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstaticViewQuery"](_c0, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.container = _t.first);
    } }, inputs: { response: "response", templateId: "templateId", location: "location", skipSaving: "skipSaving", preventSubmit: "preventSubmit", metadata: "metadata" }, decls: 2, vars: 0, consts: [["container", ""]], template: function TangyFormsPlayerComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "div", null, 0);
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Rhbmd5LWZvcm1zL3Rhbmd5LWZvcm1zLXBsYXllci90YW5neS1mb3Jtcy1wbGF5ZXIuY29tcG9uZW50LmNzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](TangyFormsPlayerComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-tangy-forms-player',
                templateUrl: './tangy-forms-player.component.html',
                styleUrls: ['./tangy-forms-player.component.css']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] }, { type: src_app_shared_services_forms_service_service__WEBPACK_IMPORTED_MODULE_4__["FormsService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }, { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"] }, { type: src_app_case_services_case_service__WEBPACK_IMPORTED_MODULE_6__["CaseService"] }, { type: _tangy_form_service__WEBPACK_IMPORTED_MODULE_7__["TangyFormService"] }, { type: src_app_shared_services_xapi_service__WEBPACK_IMPORTED_MODULE_8__["XapiService"] }]; }, { container: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
            args: ['container', { static: true }]
        }], response: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
            args: ['response']
        }], templateId: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
            args: ['templateId']
        }], location: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
            args: ['location']
        }], skipSaving: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
            args: ['skipSaving']
        }], preventSubmit: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
            args: ['preventSubmit']
        }], metadata: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
            args: ['metadata']
        }] }); })();


/***/ }),

/***/ "Rl5o":
/*!******************************************************************************!*\
  !*** ./src/app/core/auth/_components/survey-login/survey-login.component.ts ***!
  \******************************************************************************/
/*! exports provided: SurveyLoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SurveyLoginComponent", function() { return SurveyLoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_shared_services_translation_marker__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/_services/translation-marker */ "xoem");
/* harmony import */ var _services_authentication_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../_services/authentication.service */ "QOv3");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");













const _c0 = ["customLoginMarkup"];
function SurveyLoginComponent_mat_card_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-card");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Loading...\n");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function SurveyLoginComponent_mat_card_1_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-card");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "form", 1, 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "span", null, 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "mat-form-field");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "input", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function SurveyLoginComponent_mat_card_1_Template_input_ngModelChange_6_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r5); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r4.user.accessCode = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "mat-placeholder");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "i", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "key");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](12, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](13, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](14, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "button", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function SurveyLoginComponent_mat_card_1_Template_button_click_15_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r5); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r6.loginUser(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](17, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "span", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx_r1.user.accessCode);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](12, 4, "Access Code"));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](17, 6, "LOGIN"));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r1.errorMessage);
} }
class SurveyLoginComponent {
    constructor(authenticationService, route, router) {
        this.authenticationService = authenticationService;
        this.route = route;
        this.router = router;
        this.errorMessage = '';
        this.user = { accessCode: '' };
        this.ready = false;
    }
    ngOnInit() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.returnUrl = this.route.snapshot.queryParams['returnUrl'] ||
                sessionStorage.getItem('caseUrlHash') ||
                'forms-list';
            if (yield this.authenticationService.isLoggedIn()) {
                this.router.navigate([this.returnUrl]);
                return;
            }
            this.ready = true;
            yield this.renderCustomLoginMarkup();
        });
    }
    renderCustomLoginMarkup() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            let customLoginMarkup = '<img id="logo" src="/logo.png" width="100%">';
            try {
                const markup = yield this.authenticationService.getCustomLoginMarkup();
                if (markup) {
                    customLoginMarkup = markup;
                }
            }
            catch (error) {
                //pass
            }
            this.customLoginMarkup.nativeElement.innerHTML = customLoginMarkup;
        });
    }
    loginUser() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            try {
                if (yield this.authenticationService.surveyLogin(this.user.accessCode)) {
                    this.router.navigate([this.returnUrl]);
                }
                else {
                    this.errorMessage = Object(src_app_shared_services_translation_marker__WEBPACK_IMPORTED_MODULE_2__["_TRANSLATE"])('Login Unsuccessful');
                }
            }
            catch (error) {
                this.errorMessage = Object(src_app_shared_services_translation_marker__WEBPACK_IMPORTED_MODULE_2__["_TRANSLATE"])('Login Unsuccessful');
                console.error(error);
            }
        });
    }
}
SurveyLoginComponent.ɵfac = function SurveyLoginComponent_Factory(t) { return new (t || SurveyLoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_authentication_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"])); };
SurveyLoginComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: SurveyLoginComponent, selectors: [["survey-login"]], viewQuery: function SurveyLoginComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c0, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.customLoginMarkup = _t.first);
    } }, decls: 2, vars: 2, consts: [[4, "ngIf"], ["role", "form", "novalidate", ""], ["login", "ngForm"], ["customLoginMarkup", ""], ["matInput", "", "type", "text", "required", "", "id", "username", "name", "username", 3, "ngModel", "ngModelChange"], [1, "material-icons", "app-input-icon"], ["mat-raised-button", "", "color", "accent", "name", "action", 3, "click"], ["id", "err"]], template: function SurveyLoginComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, SurveyLoginComponent_mat_card_0_Template, 2, 0, "mat-card", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, SurveyLoginComponent_mat_card_1_Template, 21, 8, "mat-card", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.ready);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.ready);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_material_card__WEBPACK_IMPORTED_MODULE_6__["MatCard"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgForm"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__["MatFormField"], _angular_material_input__WEBPACK_IMPORTED_MODULE_9__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgModel"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__["MatPlaceholder"], _angular_material_button__WEBPACK_IMPORTED_MODULE_10__["MatButton"]], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_11__["TranslatePipe"]], styles: ["mat-card[_ngcontent-%COMP%] {\n  width: 300px;\n  margin: 30px auto;\n}\n.mat-title[_ngcontent-%COMP%] {\n  color: var(--primary-color);\n  font-size: 1.5em;\n  font-weight: 400;\n  font-family: Roboto, 'Helvetica Nue', sans-serif;\n}\n#logo[_ngcontent-%COMP%] {\n  margin-bottom: 15px;\n}\nmat-placeholder[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  margin-right: 0.075em;\n}\ninput.mat-input-element[_ngcontent-%COMP%] {\n  margin-top: 1em;\n}\n.mat-placeholder-required.mat-form-field-required-marker.ng-tns-c6-2[_ngcontent-%COMP%]   .mat-form-field-invalid[_ngcontent-%COMP%]   .mat-form-field-placeholder.mat-accent[_ngcontent-%COMP%], .mat-form-field-invalid[_ngcontent-%COMP%]   .mat-form-field-placeholder[_ngcontent-%COMP%]   .mat-form-field-required-marker[_ngcontent-%COMP%] {\n  position: relative;\n  bottom: 1em !important;\n}\n.mat-form-field[_ngcontent-%COMP%] {\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29yZS9hdXRoL19jb21wb25lbnRzL3N1cnZleS1sb2dpbi9zdXJ2ZXktbG9naW4uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFlBQVk7RUFDWixpQkFBaUI7QUFDbkI7QUFDQTtFQUNFLDJCQUEyQjtFQUMzQixnQkFBZ0I7RUFDaEIsZ0JBQWdCO0VBQ2hCLGdEQUFnRDtBQUNsRDtBQUNBO0VBQ0UsbUJBQW1CO0FBQ3JCO0FBQ0E7RUFDRSxxQkFBcUI7QUFDdkI7QUFFQTtFQUNFLGVBQWU7QUFDakI7QUFFQTs7Ozs7O0VBTUUsa0JBQWtCO0VBQ2xCLHNCQUFzQjtBQUN4QjtBQUNBO0VBQ0UsV0FBVztBQUNiIiwiZmlsZSI6InNyYy9hcHAvY29yZS9hdXRoL19jb21wb25lbnRzL3N1cnZleS1sb2dpbi9zdXJ2ZXktbG9naW4uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIm1hdC1jYXJkIHtcbiAgd2lkdGg6IDMwMHB4O1xuICBtYXJnaW46IDMwcHggYXV0bztcbn1cbi5tYXQtdGl0bGUge1xuICBjb2xvcjogdmFyKC0tcHJpbWFyeS1jb2xvcik7XG4gIGZvbnQtc2l6ZTogMS41ZW07XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGZvbnQtZmFtaWx5OiBSb2JvdG8sICdIZWx2ZXRpY2EgTnVlJywgc2Fucy1zZXJpZjtcbn1cbiNsb2dvIHtcbiAgbWFyZ2luLWJvdHRvbTogMTVweDtcbn1cbm1hdC1wbGFjZWhvbGRlciBpIHtcbiAgbWFyZ2luLXJpZ2h0OiAwLjA3NWVtO1xufVxuXG5pbnB1dC5tYXQtaW5wdXQtZWxlbWVudCB7XG4gIG1hcmdpbi10b3A6IDFlbTtcbn1cblxuLm1hdC1wbGFjZWhvbGRlci1yZXF1aXJlZC5tYXQtZm9ybS1maWVsZC1yZXF1aXJlZC1tYXJrZXIubmctdG5zLWM2LTJcbiAgLm1hdC1mb3JtLWZpZWxkLWludmFsaWRcbiAgLm1hdC1mb3JtLWZpZWxkLXBsYWNlaG9sZGVyLm1hdC1hY2NlbnQsXG4ubWF0LWZvcm0tZmllbGQtaW52YWxpZFxuICAubWF0LWZvcm0tZmllbGQtcGxhY2Vob2xkZXJcbiAgLm1hdC1mb3JtLWZpZWxkLXJlcXVpcmVkLW1hcmtlciB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgYm90dG9tOiAxZW0gIWltcG9ydGFudDtcbn1cbi5tYXQtZm9ybS1maWVsZCB7XG4gIHdpZHRoOiAxMDAlO1xufVxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](SurveyLoginComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'survey-login',
                templateUrl: './survey-login.component.html',
                styleUrls: ['./survey-login.component.css']
            }]
    }], function () { return [{ type: _services_authentication_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }]; }, { customLoginMarkup: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
            args: ['customLoginMarkup', { static: false }]
        }] }); })();


/***/ }),

/***/ "RnhZ":
/*!**************************************************!*\
  !*** ./node_modules/moment/locale sync ^\.\/.*$ ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": "K/tc",
	"./af.js": "K/tc",
	"./ar": "jnO4",
	"./ar-dz": "o1bE",
	"./ar-dz.js": "o1bE",
	"./ar-kw": "Qj4J",
	"./ar-kw.js": "Qj4J",
	"./ar-ly": "HP3h",
	"./ar-ly.js": "HP3h",
	"./ar-ma": "CoRJ",
	"./ar-ma.js": "CoRJ",
	"./ar-ps": "TJgH",
	"./ar-ps.js": "TJgH",
	"./ar-sa": "gjCT",
	"./ar-sa.js": "gjCT",
	"./ar-tn": "bYM6",
	"./ar-tn.js": "bYM6",
	"./ar.js": "jnO4",
	"./az": "SFxW",
	"./az.js": "SFxW",
	"./be": "H8ED",
	"./be.js": "H8ED",
	"./bg": "hKrs",
	"./bg.js": "hKrs",
	"./bm": "p/rL",
	"./bm.js": "p/rL",
	"./bn": "kEOa",
	"./bn-bd": "loYQ",
	"./bn-bd.js": "loYQ",
	"./bn.js": "kEOa",
	"./bo": "0mo+",
	"./bo.js": "0mo+",
	"./br": "aIdf",
	"./br.js": "aIdf",
	"./bs": "JVSJ",
	"./bs.js": "JVSJ",
	"./ca": "1xZ4",
	"./ca.js": "1xZ4",
	"./cs": "PA2r",
	"./cs.js": "PA2r",
	"./cv": "A+xa",
	"./cv.js": "A+xa",
	"./cy": "l5ep",
	"./cy.js": "l5ep",
	"./da": "DxQv",
	"./da.js": "DxQv",
	"./de": "tGlX",
	"./de-at": "s+uk",
	"./de-at.js": "s+uk",
	"./de-ch": "u3GI",
	"./de-ch.js": "u3GI",
	"./de.js": "tGlX",
	"./dv": "WYrj",
	"./dv.js": "WYrj",
	"./el": "jUeY",
	"./el.js": "jUeY",
	"./en-au": "Dmvi",
	"./en-au.js": "Dmvi",
	"./en-ca": "OIYi",
	"./en-ca.js": "OIYi",
	"./en-gb": "Oaa7",
	"./en-gb.js": "Oaa7",
	"./en-ie": "4dOw",
	"./en-ie.js": "4dOw",
	"./en-il": "czMo",
	"./en-il.js": "czMo",
	"./en-in": "7C5Q",
	"./en-in.js": "7C5Q",
	"./en-nz": "b1Dy",
	"./en-nz.js": "b1Dy",
	"./en-sg": "t+mt",
	"./en-sg.js": "t+mt",
	"./eo": "Zduo",
	"./eo.js": "Zduo",
	"./es": "iYuL",
	"./es-do": "CjzT",
	"./es-do.js": "CjzT",
	"./es-mx": "tbfe",
	"./es-mx.js": "tbfe",
	"./es-us": "Vclq",
	"./es-us.js": "Vclq",
	"./es.js": "iYuL",
	"./et": "7BjC",
	"./et.js": "7BjC",
	"./eu": "D/JM",
	"./eu.js": "D/JM",
	"./fa": "jfSC",
	"./fa.js": "jfSC",
	"./fi": "gekB",
	"./fi.js": "gekB",
	"./fil": "1ppg",
	"./fil.js": "1ppg",
	"./fo": "ByF4",
	"./fo.js": "ByF4",
	"./fr": "nyYc",
	"./fr-ca": "2fjn",
	"./fr-ca.js": "2fjn",
	"./fr-ch": "Dkky",
	"./fr-ch.js": "Dkky",
	"./fr.js": "nyYc",
	"./fy": "cRix",
	"./fy.js": "cRix",
	"./ga": "USCx",
	"./ga.js": "USCx",
	"./gd": "9rRi",
	"./gd.js": "9rRi",
	"./gl": "iEDd",
	"./gl.js": "iEDd",
	"./gom-deva": "qvJo",
	"./gom-deva.js": "qvJo",
	"./gom-latn": "DKr+",
	"./gom-latn.js": "DKr+",
	"./gu": "4MV3",
	"./gu.js": "4MV3",
	"./he": "x6pH",
	"./he.js": "x6pH",
	"./hi": "3E1r",
	"./hi.js": "3E1r",
	"./hr": "S6ln",
	"./hr.js": "S6ln",
	"./hu": "WxRl",
	"./hu.js": "WxRl",
	"./hy-am": "1rYy",
	"./hy-am.js": "1rYy",
	"./id": "UDhR",
	"./id.js": "UDhR",
	"./is": "BVg3",
	"./is.js": "BVg3",
	"./it": "bpih",
	"./it-ch": "bxKX",
	"./it-ch.js": "bxKX",
	"./it.js": "bpih",
	"./ja": "B55N",
	"./ja.js": "B55N",
	"./jv": "tUCv",
	"./jv.js": "tUCv",
	"./ka": "IBtZ",
	"./ka.js": "IBtZ",
	"./kk": "bXm7",
	"./kk.js": "bXm7",
	"./km": "6B0Y",
	"./km.js": "6B0Y",
	"./kn": "PpIw",
	"./kn.js": "PpIw",
	"./ko": "Ivi+",
	"./ko.js": "Ivi+",
	"./ku": "JCF/",
	"./ku-kmr": "dVgr",
	"./ku-kmr.js": "dVgr",
	"./ku.js": "JCF/",
	"./ky": "lgnt",
	"./ky.js": "lgnt",
	"./lb": "RAwQ",
	"./lb.js": "RAwQ",
	"./lo": "sp3z",
	"./lo.js": "sp3z",
	"./lt": "JvlW",
	"./lt.js": "JvlW",
	"./lv": "uXwI",
	"./lv.js": "uXwI",
	"./me": "KTz0",
	"./me.js": "KTz0",
	"./mi": "aIsn",
	"./mi.js": "aIsn",
	"./mk": "aQkU",
	"./mk.js": "aQkU",
	"./ml": "AvvY",
	"./ml.js": "AvvY",
	"./mn": "lYtQ",
	"./mn.js": "lYtQ",
	"./mr": "Ob0Z",
	"./mr.js": "Ob0Z",
	"./ms": "6+QB",
	"./ms-my": "ZAMP",
	"./ms-my.js": "ZAMP",
	"./ms.js": "6+QB",
	"./mt": "G0Uy",
	"./mt.js": "G0Uy",
	"./my": "honF",
	"./my.js": "honF",
	"./nb": "bOMt",
	"./nb.js": "bOMt",
	"./ne": "OjkT",
	"./ne.js": "OjkT",
	"./nl": "+s0g",
	"./nl-be": "2ykv",
	"./nl-be.js": "2ykv",
	"./nl.js": "+s0g",
	"./nn": "uEye",
	"./nn.js": "uEye",
	"./oc-lnc": "Fnuy",
	"./oc-lnc.js": "Fnuy",
	"./pa-in": "8/+R",
	"./pa-in.js": "8/+R",
	"./pl": "jVdC",
	"./pl.js": "jVdC",
	"./pt": "8mBD",
	"./pt-br": "0tRk",
	"./pt-br.js": "0tRk",
	"./pt.js": "8mBD",
	"./ro": "lyxo",
	"./ro.js": "lyxo",
	"./ru": "lXzo",
	"./ru.js": "lXzo",
	"./sd": "Z4QM",
	"./sd.js": "Z4QM",
	"./se": "//9w",
	"./se.js": "//9w",
	"./si": "7aV9",
	"./si.js": "7aV9",
	"./sk": "e+ae",
	"./sk.js": "e+ae",
	"./sl": "gVVK",
	"./sl.js": "gVVK",
	"./sq": "yPMs",
	"./sq.js": "yPMs",
	"./sr": "zx6S",
	"./sr-cyrl": "E+lV",
	"./sr-cyrl.js": "E+lV",
	"./sr.js": "zx6S",
	"./ss": "Ur1D",
	"./ss.js": "Ur1D",
	"./sv": "X709",
	"./sv.js": "X709",
	"./sw": "dNwA",
	"./sw.js": "dNwA",
	"./ta": "PeUW",
	"./ta.js": "PeUW",
	"./te": "XLvN",
	"./te.js": "XLvN",
	"./tet": "V2x9",
	"./tet.js": "V2x9",
	"./tg": "Oxv6",
	"./tg.js": "Oxv6",
	"./th": "EOgW",
	"./th.js": "EOgW",
	"./tk": "Wv91",
	"./tk.js": "Wv91",
	"./tl-ph": "Dzi0",
	"./tl-ph.js": "Dzi0",
	"./tlh": "z3Vd",
	"./tlh.js": "z3Vd",
	"./tr": "DoHr",
	"./tr.js": "DoHr",
	"./tzl": "z1FC",
	"./tzl.js": "z1FC",
	"./tzm": "wQk9",
	"./tzm-latn": "tT3J",
	"./tzm-latn.js": "tT3J",
	"./tzm.js": "wQk9",
	"./ug-cn": "YRex",
	"./ug-cn.js": "YRex",
	"./uk": "raLr",
	"./uk.js": "raLr",
	"./ur": "UpQW",
	"./ur.js": "UpQW",
	"./uz": "Loxo",
	"./uz-latn": "AQ68",
	"./uz-latn.js": "AQ68",
	"./uz.js": "Loxo",
	"./vi": "KSF8",
	"./vi.js": "KSF8",
	"./x-pseudo": "/X5v",
	"./x-pseudo.js": "/X5v",
	"./yo": "fzPg",
	"./yo.js": "fzPg",
	"./zh-cn": "XDpg",
	"./zh-cn.js": "XDpg",
	"./zh-hk": "SatO",
	"./zh-hk.js": "SatO",
	"./zh-mo": "OmwH",
	"./zh-mo.js": "OmwH",
	"./zh-tw": "kOpN",
	"./zh-tw.js": "kOpN"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "RnhZ";

/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _shared_services_translation_marker__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./shared/_services/translation-marker */ "xoem");
/* harmony import */ var _shared_services_app_config_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./shared/_services/app-config.service */ "PiYG");
/* harmony import */ var _core_auth_services_authentication_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./core/auth/_services/authentication.service */ "QOv3");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "ofXK");








function AppComponent_div_5_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "a", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AppComponent_div_5_Template_a_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r3); const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r2.logout(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "iron-icon", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function AppComponent_div_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "a", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "iron-icon", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("href", ctx_r1.helpLink, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
} }
class AppComponent {
    constructor(appConfigService, authenticationService, router) {
        this.appConfigService = appConfigService;
        this.authenticationService = authenticationService;
        this.router = router;
        this.hasHelpLink = false;
        this.isConfirmDialogActive = false;
        this.loggedIn = false;
    }
    ngOnInit() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.authenticationService.currentUserLoggedIn$.subscribe((isLoggedIn) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                if (isLoggedIn) {
                    this.loggedIn = isLoggedIn;
                    this.sessionTimeoutCheck();
                    this.sessionTimeoutCheckTimerID =
                        setInterval(yield this.sessionTimeoutCheck.bind(this), 10 * 60 * 1000); // check every 10 minutes
                }
                else {
                    this.loggedIn = false;
                    this.router.navigate(['/survey-login']);
                }
            }));
            try {
                const appConfig = yield this.appConfigService.getAppConfig();
                this.appName = appConfig.appName;
                this.languageDirection = appConfig.languageDirection;
                if (appConfig.helpLink) {
                    this.hasHelpLink = true;
                    this.helpLink = appConfig.helpLink;
                }
            }
            catch (error) {
                this.appName = '';
                this.languageDirection = 'ltr';
                this.helpLink = '';
            }
        });
    }
    sessionTimeoutCheck() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const token = sessionStorage.getItem('token');
            const claims = JSON.parse(atob(token.split('.')[1]));
            const expiryTimeInMs = claims['exp'] * 1000;
            const minutesBeforeExpiry = expiryTimeInMs - (15 * 60 * 1000); // warn 15 minutes before expiry of token
            if (Date.now() >= minutesBeforeExpiry && !this.isConfirmDialogActive) {
                this.isConfirmDialogActive = true;
                const extendSession = confirm(Object(_shared_services_translation_marker__WEBPACK_IMPORTED_MODULE_2__["_TRANSLATE"])('You are about to be logged out. Should we extend your session?'));
                if (extendSession) {
                    this.isConfirmDialogActive = false;
                    const extendedSession = yield this.authenticationService.extendUserSession();
                    if (!extendedSession) {
                        yield this.logout();
                    }
                }
                else {
                    this.isConfirmDialogActive = false;
                    yield this.logout();
                }
            }
            else if (Date.now() > expiryTimeInMs && this.isConfirmDialogActive) {
                // the token expired, and we warned them. Time to log out.
                yield this.logout();
            }
        });
    }
    logout() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            clearInterval(this.sessionTimeoutCheckTimerID);
            yield this.authenticationService.logout();
            this.loggedIn = false;
            this.router.navigate(['/survey-login']);
        });
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_shared_services_app_config_service__WEBPACK_IMPORTED_MODULE_3__["AppConfigService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_core_auth_services_authentication_service__WEBPACK_IMPORTED_MODULE_4__["AuthenticationService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"])); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 14, vars: 2, consts: [["id", "translation-select"], ["width", "100%"], [4, "ngIf"], ["icon", "language"], ["basePath", "./assets/", "label", "Language:", "pathToTranslationDefinitions", "./assets/translations.json"], [1, "tangerine-app-content", "mat-typography"], [3, "click"], ["icon", "lock"], ["target", "_blank", 3, "href"], ["icon", "help"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "table");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "td", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, AppComponent_div_5_Template, 3, 0, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](7, AppComponent_div_7_Template, 3, 1, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](9, "iron-icon", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](11, "t-select", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](13, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.loggedIn);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.hasHelpLink);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterOutlet"]], styles: ["#translation-select[_ngcontent-%COMP%] {\n  text-align: right;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxpQkFBaUI7QUFDbkIiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIiN0cmFuc2xhdGlvbi1zZWxlY3Qge1xuICB0ZXh0LWFsaWduOiByaWdodDtcbn1cbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.css']
            }]
    }], function () { return [{ type: _shared_services_app_config_service__WEBPACK_IMPORTED_MODULE_3__["AppConfigService"] }, { type: _core_auth_services_authentication_service__WEBPACK_IMPORTED_MODULE_4__["AuthenticationService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] }]; }, null); })();


/***/ }),

/***/ "TXql":
/*!************************************************!*\
  !*** ./src/app/model/xapi-actor-base.model.ts ***!
  \************************************************/
/*! exports provided: XapiActorBase */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "XapiActorBase", function() { return XapiActorBase; });
class XapiActorBase {
    constructor(name, mbox, mbox_sha1sum, openid, account) {
        this.name = name;
        this.mbox = mbox;
        this.mbox_sha1sum = mbox_sha1sum;
        this.openid = openid;
        this.account = account;
    }
    static fromRaw(raw) {
        if (raw.objectType === 'Group') {
            const { XapiGroup } = __webpack_require__(/*! ./xapi-group.model */ "Xup0");
            return XapiGroup.fromRaw(raw);
        }
        else {
            const { XapiAgent } = __webpack_require__(/*! ./xapi-agent.model */ "wMSA");
            return XapiAgent.fromRaw(raw);
        }
    }
}


/***/ }),

/***/ "U94Z":
/*!*************************************!*\
  !*** ./src/app/case/case.module.ts ***!
  \*************************************/
/*! exports provided: CaseModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CaseModule", function() { return CaseModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/shared.module */ "PCNd");
/* harmony import */ var _services_case_definitions_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./services/case-definitions.service */ "E88P");
/* harmony import */ var _services_case_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./services/case.service */ "97of");
/* harmony import */ var _tangy_forms_tangy_forms_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../tangy-forms/tangy-forms.module */ "dxnY");







class CaseModule {
}
CaseModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: CaseModule });
CaseModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function CaseModule_Factory(t) { return new (t || CaseModule)(); }, providers: [
        _services_case_definitions_service__WEBPACK_IMPORTED_MODULE_3__["CaseDefinitionsService"],
        _services_case_service__WEBPACK_IMPORTED_MODULE_4__["CaseService"]
    ], imports: [[
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__["SharedModule"],
            _tangy_forms_tangy_forms_module__WEBPACK_IMPORTED_MODULE_5__["TangyFormsModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](CaseModule, { imports: [_shared_shared_module__WEBPACK_IMPORTED_MODULE_2__["SharedModule"],
        _tangy_forms_tangy_forms_module__WEBPACK_IMPORTED_MODULE_5__["TangyFormsModule"],
        _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CaseModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["CUSTOM_ELEMENTS_SCHEMA"]],
                exports: [],
                imports: [
                    _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__["SharedModule"],
                    _tangy_forms_tangy_forms_module__WEBPACK_IMPORTED_MODULE_5__["TangyFormsModule"],
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]
                ],
                providers: [
                    _services_case_definitions_service__WEBPACK_IMPORTED_MODULE_3__["CaseDefinitionsService"],
                    _services_case_service__WEBPACK_IMPORTED_MODULE_4__["CaseService"]
                ],
                declarations: []
            }]
    }], null, null); })();


/***/ }),

/***/ "Uuj1":
/*!****************************************************!*\
  !*** ./src/app/case/classes/notification.class.ts ***!
  \****************************************************/
/*! exports provided: NotificationStatus, NotificationType, Notification */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotificationStatus", function() { return NotificationStatus; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotificationType", function() { return NotificationType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Notification", function() { return Notification; });
var NotificationStatus;
(function (NotificationStatus) {
    NotificationStatus["Open"] = "Open";
    NotificationStatus["Closed"] = "Closed";
})(NotificationStatus || (NotificationStatus = {}));
var NotificationType;
(function (NotificationType) {
    NotificationType["Critical"] = "Critical";
    NotificationType["Info"] = "Info";
})(NotificationType || (NotificationType = {}));
class Notification {
    constructor(data) {
        Object.assign(this, data);
    }
}



/***/ }),

/***/ "Xup0":
/*!*******************************************!*\
  !*** ./src/app/model/xapi-group.model.ts ***!
  \*******************************************/
/*! exports provided: XapiGroup */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "XapiGroup", function() { return XapiGroup; });
/* harmony import */ var _xapi_actor_base_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./xapi-actor-base.model */ "TXql");
/* harmony import */ var _xapi_agent_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./xapi-agent.model */ "wMSA");


class XapiGroup extends _xapi_actor_base_model__WEBPACK_IMPORTED_MODULE_0__["XapiActorBase"] {
    constructor(name, mbox, mbox_sha1sum, openid, account, member) {
        super(name, mbox, mbox_sha1sum, openid, account);
        this.name = name;
        this.mbox = mbox;
        this.mbox_sha1sum = mbox_sha1sum;
        this.openid = openid;
        this.account = account;
        this.member = member;
        this.objectType = 'Group';
        const identifiers = [mbox, mbox_sha1sum, openid, account].filter(Boolean);
        if (identifiers.length > 1) {
            throw new Error('A Group can have only one identifier (or none for anonymous group).');
        }
    }
    /**
     * Creates an XapiGroup instance from a raw object.
     * @param raw The raw object to convert.
     * @returns An instance of XapiGroup.
     */
    static fromRaw(raw) {
        const member = (raw.member || []).map((m) => _xapi_agent_model__WEBPACK_IMPORTED_MODULE_1__["XapiAgent"].fromRaw(m));
        return new XapiGroup(raw.name, raw.mbox, raw.mbox_sha1sum, raw.openid, raw.account, member);
    }
    /**
     * Converts the XapiGroup instance to a JSON object.
     * @returns A JSON representation of the XapiGroup.
     */
    toJSON() {
        var _a;
        return {
            objectType: 'Group',
            name: this.name,
            mbox: this.mbox,
            mbox_sha1sum: this.mbox_sha1sum,
            openid: this.openid,
            account: this.account,
            member: (_a = this.member) === null || _a === void 0 ? void 0 : _a.map((m) => m.toJSON())
        };
    }
}


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _core_auth_auth_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./core/auth/auth.module */ "LceX");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser/animations */ "R1ws");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/toolbar */ "/t3+");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/tabs */ "wZkO");
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/menu */ "STbY");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/list */ "MutI");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/snack-bar */ "dNgK");
/* harmony import */ var _shared_tangy_svg_logo_tangy_svg_logo_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./shared/tangy-svg-logo/tangy-svg-logo.component */ "qOZk");
/* harmony import */ var _tangy_forms_tangy_forms_module__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./tangy-forms/tangy-forms.module */ "dxnY");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _forms_list_forms_list_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./forms-list/forms-list.component */ "Er1b");
/* harmony import */ var _form_submitted_success_form_submitted_success_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./form-submitted-success/form-submitted-success.component */ "3ofO");
/* harmony import */ var _shared_services_tangy_error_handler_service__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./shared/_services/tangy-error-handler.service */ "QPKl");
/* harmony import */ var _case_case_module__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./case/case.module */ "U94Z");





















class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [_shared_services_tangy_error_handler_service__WEBPACK_IMPORTED_MODULE_18__["TangyErrorHandler"]], imports: [[
            _core_auth_auth_module__WEBPACK_IMPORTED_MODULE_4__["AuthModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"],
            _case_case_module__WEBPACK_IMPORTED_MODULE_19__["CaseModule"],
            _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_6__["MatToolbarModule"],
            _angular_material_menu__WEBPACK_IMPORTED_MODULE_9__["MatMenuModule"],
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__["MatIconModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_15__["HttpClientModule"],
            _angular_material_card__WEBPACK_IMPORTED_MODULE_7__["MatCardModule"],
            _angular_material_tabs__WEBPACK_IMPORTED_MODULE_8__["MatTabsModule"],
            _angular_material_list__WEBPACK_IMPORTED_MODULE_10__["MatListModule"],
            _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_12__["MatSnackBarModule"],
            _tangy_forms_tangy_forms_module__WEBPACK_IMPORTED_MODULE_14__["TangyFormsModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
        _shared_tangy_svg_logo_tangy_svg_logo_component__WEBPACK_IMPORTED_MODULE_13__["TangySvgLogoComponent"],
        _forms_list_forms_list_component__WEBPACK_IMPORTED_MODULE_16__["FormsListComponent"],
        _form_submitted_success_form_submitted_success_component__WEBPACK_IMPORTED_MODULE_17__["FormSubmittedSuccessComponent"]], imports: [_core_auth_auth_module__WEBPACK_IMPORTED_MODULE_4__["AuthModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
        _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"],
        _case_case_module__WEBPACK_IMPORTED_MODULE_19__["CaseModule"],
        _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_6__["MatToolbarModule"],
        _angular_material_menu__WEBPACK_IMPORTED_MODULE_9__["MatMenuModule"],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__["MatIconModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_15__["HttpClientModule"],
        _angular_material_card__WEBPACK_IMPORTED_MODULE_7__["MatCardModule"],
        _angular_material_tabs__WEBPACK_IMPORTED_MODULE_8__["MatTabsModule"],
        _angular_material_list__WEBPACK_IMPORTED_MODULE_10__["MatListModule"],
        _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_12__["MatSnackBarModule"],
        _tangy_forms_tangy_forms_module__WEBPACK_IMPORTED_MODULE_14__["TangyFormsModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                    _shared_tangy_svg_logo_tangy_svg_logo_component__WEBPACK_IMPORTED_MODULE_13__["TangySvgLogoComponent"],
                    _forms_list_forms_list_component__WEBPACK_IMPORTED_MODULE_16__["FormsListComponent"],
                    _form_submitted_success_form_submitted_success_component__WEBPACK_IMPORTED_MODULE_17__["FormSubmittedSuccessComponent"]
                ],
                imports: [
                    _core_auth_auth_module__WEBPACK_IMPORTED_MODULE_4__["AuthModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"],
                    _case_case_module__WEBPACK_IMPORTED_MODULE_19__["CaseModule"],
                    _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_6__["MatToolbarModule"],
                    _angular_material_menu__WEBPACK_IMPORTED_MODULE_9__["MatMenuModule"],
                    _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__["MatIconModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_15__["HttpClientModule"],
                    _angular_material_card__WEBPACK_IMPORTED_MODULE_7__["MatCardModule"],
                    _angular_material_tabs__WEBPACK_IMPORTED_MODULE_8__["MatTabsModule"],
                    _angular_material_list__WEBPACK_IMPORTED_MODULE_10__["MatListModule"],
                    _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_12__["MatSnackBarModule"],
                    _tangy_forms_tangy_forms_module__WEBPACK_IMPORTED_MODULE_14__["TangyFormsModule"]
                ],
                schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["CUSTOM_ELEMENTS_SCHEMA"]],
                providers: [_shared_services_tangy_error_handler_service__WEBPACK_IMPORTED_MODULE_18__["TangyErrorHandler"]],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "dxnY":
/*!***************************************************!*\
  !*** ./src/app/tangy-forms/tangy-forms.module.ts ***!
  \***************************************************/
/*! exports provided: TangyFormsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TangyFormsModule", function() { return TangyFormsModule; });
/* harmony import */ var _tangy_forms_info_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tangy-forms-info-service */ "Nqbn");
/* harmony import */ var _tangy_form_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tangy-form.service */ "DbiD");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _tangy_forms_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./tangy-forms-routing.module */ "DJr2");
/* harmony import */ var _tangy_forms_player_tangy_forms_player_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./tangy-forms-player/tangy-forms-player.component */ "RTZb");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_chips__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/chips */ "A5z7");
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/menu */ "STbY");
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/tabs */ "wZkO");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../shared/shared.module */ "PCNd");












class TangyFormsModule {
}
TangyFormsModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: TangyFormsModule });
TangyFormsModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ factory: function TangyFormsModule_Factory(t) { return new (t || TangyFormsModule)(); }, providers: [
        _tangy_forms_info_service__WEBPACK_IMPORTED_MODULE_0__["TangyFormsInfoService"],
        _tangy_form_service__WEBPACK_IMPORTED_MODULE_1__["TangyFormService"]
    ], imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
            _angular_material_tabs__WEBPACK_IMPORTED_MODULE_9__["MatTabsModule"],
            _angular_material_menu__WEBPACK_IMPORTED_MODULE_8__["MatMenuModule"],
            _angular_material_button__WEBPACK_IMPORTED_MODULE_6__["MatButtonModule"],
            _angular_material_chips__WEBPACK_IMPORTED_MODULE_7__["MatChipsModule"],
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_10__["SharedModule"],
            _tangy_forms_routing_module__WEBPACK_IMPORTED_MODULE_4__["TangyFormsRoutingModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](TangyFormsModule, { declarations: [_tangy_forms_player_tangy_forms_player_component__WEBPACK_IMPORTED_MODULE_5__["TangyFormsPlayerComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
        _angular_material_tabs__WEBPACK_IMPORTED_MODULE_9__["MatTabsModule"],
        _angular_material_menu__WEBPACK_IMPORTED_MODULE_8__["MatMenuModule"],
        _angular_material_button__WEBPACK_IMPORTED_MODULE_6__["MatButtonModule"],
        _angular_material_chips__WEBPACK_IMPORTED_MODULE_7__["MatChipsModule"],
        _shared_shared_module__WEBPACK_IMPORTED_MODULE_10__["SharedModule"],
        _tangy_forms_routing_module__WEBPACK_IMPORTED_MODULE_4__["TangyFormsRoutingModule"]], exports: [_tangy_forms_player_tangy_forms_player_component__WEBPACK_IMPORTED_MODULE_5__["TangyFormsPlayerComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](TangyFormsModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"],
        args: [{
                schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["CUSTOM_ELEMENTS_SCHEMA"]],
                exports: [_tangy_forms_player_tangy_forms_player_component__WEBPACK_IMPORTED_MODULE_5__["TangyFormsPlayerComponent"]],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
                    _angular_material_tabs__WEBPACK_IMPORTED_MODULE_9__["MatTabsModule"],
                    _angular_material_menu__WEBPACK_IMPORTED_MODULE_8__["MatMenuModule"],
                    _angular_material_button__WEBPACK_IMPORTED_MODULE_6__["MatButtonModule"],
                    _angular_material_chips__WEBPACK_IMPORTED_MODULE_7__["MatChipsModule"],
                    _shared_shared_module__WEBPACK_IMPORTED_MODULE_10__["SharedModule"],
                    _tangy_forms_routing_module__WEBPACK_IMPORTED_MODULE_4__["TangyFormsRoutingModule"]
                ],
                providers: [
                    _tangy_forms_info_service__WEBPACK_IMPORTED_MODULE_0__["TangyFormsInfoService"],
                    _tangy_form_service__WEBPACK_IMPORTED_MODULE_1__["TangyFormService"]
                ],
                declarations: [_tangy_forms_player_tangy_forms_player_component__WEBPACK_IMPORTED_MODULE_5__["TangyFormsPlayerComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "g1mA":
/*!*********************************!*\
  !*** ../tangy-form/util/loc.js ***!
  \*********************************/
/*! exports provided: Loc */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Loc", function() { return Loc; });
class Loc {
  /*
   * @returns FlatLocationList {locations: [ LocationNodeWithParentRef, ... ], locationsLevels: [ ... ]}
   */
  static flatten(locationList = { locations: {}, locationsLevels: []}) {
    let locations = []
    let levels = [ ...locationList.locationsLevels ]
    function dig(node, levelIndex=0) {
      if (!node.children) return
      const level = levels[levelIndex]
      let children = []
      for (let id in node.children) {
        children.push(Object.assign({}, node.children[id], { level }))
      }
      while (children && children.length > 0) {
        let freshNode = children.pop()
        locations.push(Object.assign({}, freshNode, {parent: node.id, children: {}}))
        dig(freshNode, levelIndex+1)
      }
    }
    dig({children: locationList.locations, id: 'root'}, 0)
    return Object.assign({}, locationList, { locations })
  }

  /*
   * @returns LocationList {locations: { ... }, locationsLevels: [ ... ]}
   */
  static unflatten(flatLocationList = { locations: [], locationsLevels: []}) {
    for (let level of [...flatLocationList.locationsLevels].reverse()) {
      flatLocationList
        .locations
        .filter(node => node.level === level)
        .forEach(node => {
          // not calculating children, have to come up from parent
          const children = flatLocationList.locations.filter(potentialChild => potentialChild.parent === node.id)
            .reduce((locationsById, node) => { return {...locationsById, [node.id]: node}}, {})
          node.children = children
        })
    }
    const getCircularReplacer = () => {
      const seen = new WeakSet();
      return (key, value) => {
        if (typeof value === "object" && value !== null) {
          if (seen.has(value)) {
            return;
          }
          seen.add(value);
        }
        return value;
      };
    };
    return JSON.parse(JSON.stringify({
      ...flatLocationList,
      locations: flatLocationList.locations
        .filter(node => node.level === flatLocationList.locationsLevels[0])
        .reduce((locationsById, node) => { return {...locationsById, [node.id]: node}}, {})
    }, getCircularReplacer()))
  }

  /*
   * Takes a location list and a list of IDs to filter by. It finds the paths those IDs and then filters out any locations not on that path.
   * Lastly if includeDescendents paramets is true, it also attaches all decendents of the IDs specified in filterByIds.
   * 
   */
  static filterById(locationList = {locations: {}, locationsLevels: []}, filterByIds = [], includeDecendents=true) {
    const locations = this.flatten(locationList).locations
    // Find full paths to IDs then combine and deduplicate.
    const allCrumbs = filterByIds
      .map(id => {
        let breadcrumbs = [id]
        let parent = locations.find(location => id === location.id).parent
        breadcrumbs.push(parent.slice())
        while (parent !== 'root') {
          parent = locations.find(location => parent === location.id).parent
          breadcrumbs.push(parent.slice())
        }
        return breadcrumbs.reverse()
      })
      .reduce((allCrumbs, path) => [...new Set([...allCrumbs, ...path])], [])
    // Get locations based on all the crumbs we just found.
    let filteredLocations = locations.filter(location => allCrumbs.indexOf(location.id) !== -1)
    if (includeDecendents) {
      // find leaves, AKA nodes with no children.
      const leaves = filteredLocations.reduce((leaves, location) => {
        // If the location is a parent, then continue, otherwise add to leaves.
        if (filteredLocations.filter(filteredLocation => filteredLocation.parent === location.id).length > 0) {
          return leaves 
        } else {
          return [...leaves, location]
        }
      }, [])
      // Get decendents of the leaves and then push them into filteredLocations.
      for (let leaf of leaves) {
        this.findDecendents(locations, leaf.id).forEach(location => filteredLocations.push(location))
      }
    } 
    return this.unflatten(Object.assign({}, locationList, {locations: filteredLocations}))
  }

  // Given a parent location ID and a level, returns an array of decendents at the level specified.
  static filterToDecendentsByParentIdAndLevel(locationList = {locations: {}, locationsLevels: []}, byParentId='', byLevel='') {
    const flatLocations = this.flatten(locationList).locations
    const decendents = this.findDecendents(flatLocations, byParentId).filter(locationNode => locationNode.level === byLevel)
    return decendents
  }

  // Given a parent location ID and a level, returns an array of decendents at the level specified.
  static flatFilterToDecendentsByParentIdAndLevel(flatLocationList = {locations: {}, locationsLevels: []}, byParentId='', byLevel='') {
    const flatLocations = flatLocationList.locations
    const decendents = this.findDecendents(flatLocations, byParentId).filter(locationNode => locationNode.level === byLevel)
    return decendents
  }

  static findDecendents(flatLocations, locationId) {
    let decendents = []
    // Could be a problem here.
    function dig(locationId) {
      let found = flatLocations.filter((location) => location.parent === locationId)
      found.forEach(location => {
        decendents.push(location)
        dig(location.id)
      })
    }
    dig(locationId)
    return decendents
  }

  static calculateDescendantCounts(locationList = {}) {
    const flatLocationList = this.flatten(locationList)
    for (let level of [...locationList.locationsLevels].reverse()) {
      flatLocationList
        .locations
        .filter(node => node.level === level)
        .forEach(node => {
          // not calculating children, have to come up from parent
          const children = flatLocationList.locations.filter(potentialChild => potentialChild.parent === node.id)
          if (children.length > 0) {
            node.descendantsCount = children.reduce((descendantsCount, childNode) => {
              // If the child has no descendants, then that child IS a descendant so count it as one,
              // otherwise aggregate descendantsCounts up.
              return childNode.descendantsCount === 0
                ? descendantsCount + 1
                : descendantsCount + childNode.descendantsCount 
            }, 0)
          } else {
            node.descendantsCount = 0
          }
        })
    }
    return this.unflatten(flatLocationList)
  }

  getLineage(id, locationList) {
    const flatLocationList = this.flatten(locationList)
    const locations = flatLocationList.locations
    let breadcrumbs = [id]
    let parent = locations.find(location => id === location.id).parent
    breadcrumbs.push(parent.slice())
    while (parent !== 'root') {
      parent = locations.find(location => parent === location.id).parent
      breadcrumbs.push(parent.slice())
    }
    breadcrumbs.pop()
    return breadcrumbs
      .map(breadcrumb => locations.find(node => node.id === breadcrumb))
      .reverse()
  }

  static query (levels, criteria, locationList, qCallback, context) {
    var currentLevelIndex, i, j, len, level, levelIDs, levelMap, locationLevels, locations, resp, targetLevelIndex;
    if (criteria == null) {
      criteria = {};
    }
    locations = locationList.locations;
    locationLevels = locationList.locationsLevels;
    targetLevelIndex = 0;
    levelIDs = [];
    levelMap = [];
    for (i = j = 0, len = locationLevels.length; j < len; i = ++j) {
      level = locationLevels[i];
      if (levels.indexOf(level) === -1) {
        levelMap[i] = null;
      } else {
        levelMap[i] = level;
      }
    }
    currentLevelIndex = Loc.getCurrentLevelIndex(levels, criteria, levelMap);
    resp = Loc._query(0, currentLevelIndex, locations, levelMap, criteria);
    qCallback(resp)
  }

  static _query (depth, targetDepth, data, levelMap, criteria) {
    var allChildren, i, j, len, levelData, v;
    if (depth === targetDepth) {
      return Object.keys(data).map(key => data[key]).map(function(obj) {
        return {
          id: obj.id,
          label: obj.label
        };
      });
    }
    if ((levelMap[depth] != null) && (depth < targetDepth)) {
      if (criteria[levelMap[depth]] && data[criteria[levelMap[depth]]] && data[criteria[levelMap[depth]]].hasOwnProperty('children')) {
        return Loc._query(depth + 1, targetDepth, data[criteria[levelMap[depth]]].children, levelMap, criteria);
      }
    }
    if ((levelMap[depth] == null) && (depth < targetDepth)) {
      levelData = {};
      allChildren = Object.keys(data).map(key => data[key]).map(function(loc) {
        return loc.children;
      });
      for (i = j = 0, len = allChildren.length; j < len; i = ++j) {
        v = allChildren[i];
        Object.assign(levelData, v);
      }
      return Loc._query(depth + 1, targetDepth, levelData, levelMap, criteria);
    }
    console.log("_query: (depth, targetDepth, data, levelMap, criteria)", depth, targetDepth, data, levelMap, criteria);
    console.log("ERROR: Cannot find location. I should never reach this.");
    return {};
  }

  static getCurrentLevelIndex (levels, criteria, levelMap) {
    var i, j, len, level;
    for (i = j = 0, len = levels.length; j < len; i = ++j) {
      level = levels[i];
      if (criteria[level] == null) {
        return levelMap.indexOf(level);
      }
    }
    return levelMap.indexOf(levels[levels.length-1]);
  }

}


/***/ }),

/***/ "gYqp":
/*!*******************************************************!*\
  !*** ./src/app/shared/classes/user-database.class.ts ***!
  \*******************************************************/
/*! exports provided: UserDatabase */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserDatabase", function() { return UserDatabase; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "vDqi");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var fast_json_patch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! fast-json-patch */ "1zMv");



class UserDatabase {
    constructor(userId, groupId = '') {
        this.attachHistoryToDocs = undefined;
        this.userId = userId;
        this.username = userId;
        this.name = userId;
        this.deviceId = 'SURVEY';
        this.buildId = 'SURVEY';
        this.buildChannel = 'SURVEY';
        this.groupId = groupId;
    }
    get(id) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const token = sessionStorage.getItem('token');
            return (yield axios__WEBPACK_IMPORTED_MODULE_1___default.a.get(`/group-responses/read/${this.groupId}/${id}`, { headers: { authorization: token } })).data;
        });
    }
    put(doc) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            return yield this.post(doc);
        });
    }
    post(doc) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const token = sessionStorage.getItem('token');
            if (this.attachHistoryToDocs === undefined) {
                const appConfig = (yield axios__WEBPACK_IMPORTED_MODULE_1___default.a.get('./assets/app-config.json', { headers: { authorization: token } })).data;
                this.attachHistoryToDocs = appConfig['attachHistoryToDocs']
                    ? true
                    : false;
            }
            const newDoc = Object.assign(Object.assign({}, doc), { tangerineModifiedByUserId: this.userId, tangerineModifiedByDeviceId: this.deviceId, tangerineModifiedOn: Date.now(), buildId: this.buildId, deviceId: this.deviceId, groupId: this.groupId, buildChannel: this.buildChannel, 
                // Backwards compatibility for sync protocol 1. 
                lastModified: Date.now() });
            return (yield axios__WEBPACK_IMPORTED_MODULE_1___default.a.post(`/group-responses/update/${this.groupId}`, {
                response: Object.assign(Object.assign({}, newDoc), this.attachHistoryToDocs
                    ? { history: yield this._calculateHistory(newDoc) }
                    : {})
            }, {
                headers: {
                    authorization: token
                }
            })).data;
        });
    }
    remove(doc) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            // This is not implemented...
            const token = sessionStorage.getItem('token');
            return yield axios__WEBPACK_IMPORTED_MODULE_1___default.a.delete(`/api/${this.groupId}`, doc);
        });
    }
    _calculateHistory(newDoc) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            let history = [];
            try {
                const currentDoc = yield this.get(newDoc._id);
                const entry = {
                    lastRev: currentDoc._rev,
                    patch: fast_json_patch__WEBPACK_IMPORTED_MODULE_2__["compare"](currentDoc, newDoc).filter(mod => mod.path.substr(0, 8) !== '/history')
                };
                history = currentDoc.history
                    ? [entry, ...currentDoc.history]
                    : [entry];
            }
            catch (e) {
                const entry = {
                    lastRev: 0,
                    patch: fast_json_patch__WEBPACK_IMPORTED_MODULE_2__["compare"]({}, newDoc).filter(mod => mod.path.substr(0, 8) !== '/history')
                };
                history = [entry];
            }
            return history;
        });
    }
}


/***/ }),

/***/ "mtXF":
/*!***********************************************************!*\
  !*** ./src/app/shared/_services/forms-service.service.ts ***!
  \***********************************************************/
/*! exports provided: FormsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormsService", function() { return FormsService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_config_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-config.service */ "PiYG");






class FormsService {
    constructor(httpClient, appConfigService) {
        this.httpClient = httpClient;
        this.appConfigService = appConfigService;
    }
    getForms() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            try {
                return yield this.httpClient.get('./assets/forms.json').toPromise();
            }
            catch (error) {
                console.error(error);
            }
        });
    }
    getFormById(formId) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            try {
                return (yield this.getForms()).find(e => e.id === formId);
            }
            catch (error) {
                console.error(error);
            }
        });
    }
    getFormMarkUpById(formId) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            try {
                const formSrc = (yield (this.getFormById(formId))).src;
                return yield this.httpClient.get(formSrc, { responseType: 'text' }).toPromise();
            }
            catch (error) {
                console.error(error);
            }
        });
    }
    uploadFormResponse(formResponse) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            try {
                const config = yield this.appConfigService.getAppConfig();
                // Set the groupId or it will be missing from the form
                // TODO: Move this logic to tangy-form so it happens for all responses
                formResponse.groupId = config.groupId;
                const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]();
                headers.set('formUploadToken', config.uploadKey);
                const data = yield this.httpClient.post(config.formUploadURL, formResponse, { headers, observe: 'response' }).toPromise();
                return data.status === 200;
            }
            catch (error) {
                console.error(error);
                return false;
            }
        });
    }
}
FormsService.ɵfac = function FormsService_Factory(t) { return new (t || FormsService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_app_config_service__WEBPACK_IMPORTED_MODULE_3__["AppConfigService"])); };
FormsService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: FormsService, factory: FormsService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](FormsService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }, { type: _app_config_service__WEBPACK_IMPORTED_MODULE_3__["AppConfigService"] }]; }, null); })();


/***/ }),

/***/ "qOZk":
/*!*******************************************************************!*\
  !*** ./src/app/shared/tangy-svg-logo/tangy-svg-logo.component.ts ***!
  \*******************************************************************/
/*! exports provided: TangySvgLogoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TangySvgLogoComponent", function() { return TangySvgLogoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");



class TangySvgLogoComponent {
    constructor() { }
}
TangySvgLogoComponent.ɵfac = function TangySvgLogoComponent_Factory(t) { return new (t || TangySvgLogoComponent)(); };
TangySvgLogoComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TangySvgLogoComponent, selectors: [["app-tangy-svg-logo"]], inputs: { tangyLogoStyle: "tangyLogoStyle" }, decls: 21, vars: 1, consts: [["xmlns", "http://www.w3.org/2000/svg", "viewBox", "0 0 83.41 83.43", 3, "ngStyle"], ["id", "Layer_2", "data-name", "Layer 2"], ["id", "Layer_1-2", "data-name", "Layer 1"], ["d", "M35.79 6.93a3.24 3.24 0 0 1 4.62 3.15l.71 25.74c.07 2.62-1.2 3.09-2.83 1l-16-20.22a3.23 3.23 0 0 1 1.52-5.36z", 1, "cls-1"], ["cx", "41.71", "cy", "41.72", "r", "40.28", "transform", "rotate(-44.86 41.725 41.72)", 1, "cls-2"], ["d", "M41.72 83.43a41.72 41.72 0 0 1-29.43-71.28 41.72 41.72 0 1 1 58.85 59.13 41.45 41.45 0 0 1-29.42 12.15zm0-80.57a38.85 38.85 0 0 0-27.54 66.26 38.85 38.85 0 1 0 55.07-54.81A38.59 38.59 0 0 0 41.71 2.86z", 1, "cls-3"], ["d", "M35.12 78.08a3.25 3.25 0 0 1-3.26-4.54L40 49.11c.83-2.49 2.19-2.49 3 0l8.15 24.49a3.23 3.23 0 0 1-3.26 4.52z", 1, "cls-4"], ["d", "M59.5 74a3.24 3.24 0 0 1-5.42-1.38L44.61 48.7c-1-2.44.07-3.31 2.31-1.94l22 13.52a3.23 3.23 0 0 1 .4 5.56z", 1, "cls-1"], ["d", "M75.56 55.24a3.25 3.25 0 0 1-5 2.43L47.88 45.41c-2.31-1.25-2.07-2.58.52-3l25.52-3.77a3.23 3.23 0 0 1 3.88 4z", 1, "cls-5"], ["d", "M75.8 30.53a3.25 3.25 0 0 1-2.3 5.09l-25.23 5.17c-2.57.53-3.25-.65-1.51-2.61l17.13-19.29a3.23 3.23 0 0 1 5.54.57z", 1, "cls-4"], ["d", "M60.09 11.45a3.24 3.24 0 0 1 1.52 5.38L45.6 37c-1.63 2.06-2.9 1.59-2.83-1l.72-25.79a3.23 3.23 0 0 1 4.61-3.15z", 1, "cls-5"], ["d", "M14.28 19.08a3.24 3.24 0 0 1 5.56-.56l17.09 19.27c1.74 2 1.06 3.14-1.51 2.61l-25.27-5.19a3.23 3.23 0 0 1-2.28-5.09z", 1, "cls-5"], ["d", "M5.6 42.23a3.24 3.24 0 0 1 3.9-4L35 42c2.6.38 2.83 1.72.52 3L12.81 57.24a3.23 3.23 0 0 1-5-2.43z", 1, "cls-4"], ["d", "M13.84 65.53a3.24 3.24 0 0 1 .41-5.53l21.94-13.53c2.24-1.37 3.27-.5 2.31 1.94l-9.5 24a3.23 3.23 0 0 1-5.41 1.36z", 1, "cls-1"], ["d", "M26 74.83a3.84 3.84 0 0 1-2.46-1l-9.76-8.23a3.36 3.36 0 0 1 .43-5.77l21.92-13.46A3.73 3.73 0 0 1 38 45.7a1 1 0 0 1 .83.39c.32.46.26 1.28-.17 2.36l-9.5 24A3.42 3.42 0 0 1 26 74.83zm12-28.89a3.56 3.56 0 0 0-1.7.63L14.31 60.06a3.13 3.13 0 0 0-.4 5.38l9.76 8.23a3.6 3.6 0 0 0 2.3.93 3.19 3.19 0 0 0 2.91-2.24l9.5-24c.39-1 .46-1.75.2-2.14a.71.71 0 0 0-.58-.28z", 1, "cls-1"], ["cx", "41.72", "cy", "42.53", "r", "2.06", "transform", "rotate(-44.86 41.72 42.527)", 1, "cls-5"], ["d", "M10.36 30.55c.42-.9 1.7-.75 2.84.33s.8 1.82-.77 1.64-2.5-1.06-2.07-1.97zm14.99 1.14c.42-.9 1.7-.75 2.85.33s.8 1.82-.77 1.64-2.5-1.07-2.08-1.97zm-1.5 36.02c-.83-.55-.5-1.79.74-2.77s1.91-.53 1.51 1-1.42 2.32-2.25 1.77zM54.39 57.6c-.82.56-1.85-.22-2.28-1.73s.24-2 1.49-1 1.61 2.13.79 2.73z", 1, "cls-6"]], template: function TangySvgLogoComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "svg", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "defs");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "style");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " .cls-1 { fill: #fcb814; } .cls-2 { fill: #f8f185; } .cls-3 { fill: #f2682c; } .cls-4 { fill: #f47820; } .cls-5 { fill: #f2672b; } .cls-6 { fill: #fff; } ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "g", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "g", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "path", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "circle", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "path", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "path", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "path", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "path", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "path", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "path", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "path", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "path", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "path", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "path", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "path", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "circle", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "path", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", ctx.tangyLogoStyle);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgStyle"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC90YW5neS1zdmctbG9nby90YW5neS1zdmctbG9nby5jb21wb25lbnQuY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TangySvgLogoComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-tangy-svg-logo',
                templateUrl: './tangy-svg-logo.component.html',
                styleUrls: ['./tangy-svg-logo.component.css']
            }]
    }], function () { return []; }, { tangyLogoStyle: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _form_submitted_success_form_submitted_success_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./form-submitted-success/form-submitted-success.component */ "3ofO");
/* harmony import */ var _forms_list_forms_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./forms-list/forms-list.component */ "Er1b");
/* harmony import */ var _tangy_forms_tangy_forms_player_tangy_forms_player_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./tangy-forms/tangy-forms-player/tangy-forms-player.component */ "RTZb");
/* harmony import */ var _core_auth_guards_login_guard_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./core/auth/_guards/login-guard.service */ "7jmW");
/* harmony import */ var _core_auth_components_survey_login_survey_login_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./core/auth/_components/survey-login/survey-login.component */ "Rl5o");









const routes = [
    { path: 'survey-login', component: _core_auth_components_survey_login_survey_login_component__WEBPACK_IMPORTED_MODULE_6__["SurveyLoginComponent"] },
    { path: 'forms-list', component: _forms_list_forms_list_component__WEBPACK_IMPORTED_MODULE_3__["FormsListComponent"], canActivate: [_core_auth_guards_login_guard_service__WEBPACK_IMPORTED_MODULE_5__["LoginGuard"]] },
    { path: 'form-submitted-success', component: _form_submitted_success_form_submitted_success_component__WEBPACK_IMPORTED_MODULE_2__["FormSubmittedSuccessComponent"], canActivate: [_core_auth_guards_login_guard_service__WEBPACK_IMPORTED_MODULE_5__["LoginGuard"]] },
    { path: 'form/:formId', component: _tangy_forms_tangy_forms_player_tangy_forms_player_component__WEBPACK_IMPORTED_MODULE_4__["TangyFormsPlayerComponent"], canActivate: [_core_auth_guards_login_guard_service__WEBPACK_IMPORTED_MODULE_5__["LoginGuard"]] },
    { path: 'form/option/:formId/:option', component: _tangy_forms_tangy_forms_player_tangy_forms_player_component__WEBPACK_IMPORTED_MODULE_4__["TangyFormsPlayerComponent"], canActivate: [_core_auth_guards_login_guard_service__WEBPACK_IMPORTED_MODULE_5__["LoginGuard"]] },
    { path: 'case/event/form/:case/:event/:form', component: _tangy_forms_tangy_forms_player_tangy_forms_player_component__WEBPACK_IMPORTED_MODULE_4__["TangyFormsPlayerComponent"], canActivate: [_core_auth_guards_login_guard_service__WEBPACK_IMPORTED_MODULE_5__["LoginGuard"]] },
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes, { useHash: true })], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes, { useHash: true })],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "wMSA":
/*!*******************************************!*\
  !*** ./src/app/model/xapi-agent.model.ts ***!
  \*******************************************/
/*! exports provided: XapiAgent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "XapiAgent", function() { return XapiAgent; });
/* harmony import */ var _xapi_actor_base_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./xapi-actor-base.model */ "TXql");

class XapiAgent extends _xapi_actor_base_model__WEBPACK_IMPORTED_MODULE_0__["XapiActorBase"] {
    constructor(name, mbox, mbox_sha1sum, openid, account) {
        super(name, mbox, mbox_sha1sum, openid, account);
        this.name = name;
        this.mbox = mbox;
        this.mbox_sha1sum = mbox_sha1sum;
        this.openid = openid;
        this.account = account;
        this.objectType = 'Agent';
    }
    static fromRaw(raw) {
        return new XapiAgent(raw.name, raw.mbox, raw.mbox_sha1sum, raw.openid, raw.account);
    }
    toJSON() {
        return {
            objectType: 'Agent',
            name: this.name,
            mbox: this.mbox,
            mbox_sha1sum: this.mbox_sha1sum,
            openid: this.openid,
            account: this.account
        };
    }
}


/***/ }),

/***/ "xoem":
/*!********************************************************!*\
  !*** ./src/app/shared/_services/translation-marker.ts ***!
  \********************************************************/
/*! exports provided: _TRANSLATE */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_TRANSLATE", function() { return _TRANSLATE; });
function _TRANSLATE(str) {
    return str;
}


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "AytR");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map