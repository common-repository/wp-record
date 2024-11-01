webpackJsonp([1],{

/***/ 137:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(141);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__(142);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(147);




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=/home/victor/PhpstormProjects/LIONTUDE/wp-record/admin/src/main.js.map

/***/ }),

/***/ 142:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_main_main_component__ = __webpack_require__(143);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_record_record_component__ = __webpack_require__(145);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_record_item_record_item_component__ = __webpack_require__(144);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_td_issues_td_issues_component__ = __webpack_require__(146);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_forms__["b" /* ReactiveFormsModule */]
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_4__components_main_main_component__["a" /* MainComponent */],
            __WEBPACK_IMPORTED_MODULE_5__components_record_record_component__["a" /* RecordComponent */],
            __WEBPACK_IMPORTED_MODULE_6__components_record_item_record_item_component__["a" /* RecordItemComponent */],
            __WEBPACK_IMPORTED_MODULE_7__components_td_issues_td_issues_component__["a" /* TdIssuesComponent */]
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_4__components_main_main_component__["a" /* MainComponent */]]
    })
], AppModule);

//# sourceMappingURL=/home/victor/PhpstormProjects/LIONTUDE/wp-record/admin/src/app.module.js.map

/***/ }),

/***/ 143:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__td_issues_td_issues_service__ = __webpack_require__(57);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MainComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var MainComponent = (function () {
    function MainComponent() {
    }
    MainComponent.prototype.ngOnInit = function () {
    };
    return MainComponent;
}());
MainComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* Component */])({
        selector: 'record-app',
        template: __webpack_require__(205),
        styles: [__webpack_require__(201)],
        providers: [__WEBPACK_IMPORTED_MODULE_1__td_issues_td_issues_service__["a" /* TdIssuesService */]],
        encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* ViewEncapsulation */].None
    }),
    __metadata("design:paramtypes", [])
], MainComponent);

//# sourceMappingURL=/home/victor/PhpstormProjects/LIONTUDE/wp-record/admin/src/main.component.js.map

/***/ }),

/***/ 144:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__record_record_service__ = __webpack_require__(90);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__record_item_model__ = __webpack_require__(89);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RecordItemComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var RecordItemComponent = (function () {
    function RecordItemComponent(recordService, formBuilder) {
        this.recordService = recordService;
        this.idPost = jQuery('#td-record-box').attr('data-post-id');
        this.onRemove = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* EventEmitter */]();
        this.onRecordSelected = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* EventEmitter */]();
        this.showEditInput = false;
        this.itemForm = formBuilder.group({
            'name': [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].required]
        });
        //this.itemForm.valueChanges.subscribe(
        //  (form:any) => {
        //    console.log('form changed to:', form);
        //  }
        //);
    }
    RecordItemComponent.prototype.onSubmit = function (value) {
        var _this = this;
        if (value.name != this.record.name) {
            this.record.name = value.name;
            this.recordService
                .postUpdateRecord(this.record, this.idPost)
                .subscribe(function (data) {
                if (data) {
                    Materialize.toast("<p>The record was changed :)</p>", 3000);
                }
                else {
                    Materialize.toast("<p>The record wasn't changed :(</p>", 3000);
                }
                _this.showEditInput = false;
            }, function (err) {
                Materialize.toast("<p>" + err + "</p>", 3000);
            }, function () { return console.log('done'); });
        }
        else {
            this.showEditInput = false;
        }
    };
    RecordItemComponent.prototype.removeSure = function () {
        this.onRecordSelected.emit(this.record);
    };
    RecordItemComponent.prototype.remove = function () {
        this.onRemove.emit(this.record);
    };
    RecordItemComponent.prototype.showInput = function () {
        this.showEditInput = true;
    };
    RecordItemComponent.prototype.setShowTitle = function (value) {
        var _this = this;
        this.record.showTitle = value;
        this.recordService
            .postUpdateRecord(this.record, this.idPost)
            .subscribe(function (data) {
            if (data) {
                Materialize.toast("<p>The record was changed :)</p>", 3000);
            }
            else {
                Materialize.toast("<p>The record wasn't changed :(</p>", 3000);
            }
            _this.showEditInput = false;
        }, function (err) {
            Materialize.toast("<p>" + err + "</p>", 3000);
        }, function () { return console.log('done'); });
    };
    RecordItemComponent.prototype.selectText = function (id) {
        var sel, range;
        var el = document.getElementById('select-' + id); //get element id
        if (window.getSelection && document.createRange) {
            sel = window.getSelection();
            if (sel.toString() == '') {
                window.setTimeout(function () {
                    range = document.createRange(); //range object
                    range.selectNodeContents(el); //sets Range
                    sel.removeAllRanges(); //remove all ranges from selection
                    sel.addRange(range); //add Range to a Selection.
                }, 1);
            }
        }
    };
    RecordItemComponent.prototype.ngOnInit = function () {
    };
    return RecordItemComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Input */])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__record_item_model__["a" /* Record */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__record_item_model__["a" /* Record */]) === "function" && _a || Object)
], RecordItemComponent.prototype, "record", void 0);
RecordItemComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* Component */])({
        selector: 'record-item',
        template: __webpack_require__(206),
        styles: [__webpack_require__(202)],
        providers: [__WEBPACK_IMPORTED_MODULE_2__record_record_service__["a" /* RecordService */]],
        encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* ViewEncapsulation */].None,
        outputs: ['onRemove', 'onRecordSelected']
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__record_record_service__["a" /* RecordService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__record_record_service__["a" /* RecordService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* FormBuilder */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* FormBuilder */]) === "function" && _c || Object])
], RecordItemComponent);

var _a, _b, _c;
//# sourceMappingURL=/home/victor/PhpstormProjects/LIONTUDE/wp-record/admin/src/record-item.component.js.map

/***/ }),

/***/ 145:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__td_issues_td_issues_service__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__record_service__ = __webpack_require__(90);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__record_item_record_item_model__ = __webpack_require__(89);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RecordComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var RecordComponent = (function () {
    function RecordComponent(recordService, issuesService) {
        var _this = this;
        this.recordService = recordService;
        this.issuesService = issuesService;
        this.idPost = jQuery('#td-record-box').attr('data-post-id');
        this.isDontRecord = false;
        this.isDontStop = true;
        this.recorder = Fr.voice;
        this.isDontBrowserSupportHttps = false;
        this.isDontBrowserSupportHttpsMessage = '';
        this.isDontInputDevice = false;
        this.isDontInputDeviceMessage = '';
        this.mediaOptions = {
            audio: {
                tag: 'audio',
                type: 'audio/mp3',
                ext: '.mp3',
                gUM: {
                    audio: true
                }
            }
        };
        this.records = [];
        this.recordService
            .getRecords(this.idPost)
            .subscribe(function (data) {
            _this.records = data.records;
        }, function (err) {
            Materialize.toast("<p>" + err.message + "</p>", 10000);
            console.error(err);
        }, function () { return console.log('done'); });
    }
    RecordComponent.prototype.onOut = function (args) {
        this.recordService
            .postRecords(this.records, this.idPost)
            .subscribe(function (data) {
            if (data) {
                Materialize.toast("<p>The record was changed :)</p>", 3000);
            }
            else {
                Materialize.toast("<p>The record wasn't changed :(</p>", 3000);
            }
        }, function (err) {
            Materialize.toast("<p>" + err + "</p>", 10000);
        }, function () { return console.log('done'); });
    };
    /**
     * When click on record button then launch user media.
     */
    RecordComponent.prototype.record = function () {
        var that = this;
        if (location.protocol != 'https:') {
            Materialize.toast("<p>Warning: some web browsers only allow you to record voice if they are on HTTPS connection.</p>", 10000);
        }
        if (!this.isDontBrowserSupportHttps) {
            this.recorder.record('', function (stream) {
                that.isDontInputDevice = false;
                if (stream) {
                    that.makeWaveform();
                }
                else {
                    that.isDontInputDevice = true;
                    that.isDontInputDeviceMessage = 'No live audio input';
                    Materialize.toast("<p>Error: No live audio input.</p>", 10000);
                    that.isDontStop = true;
                }
            });
            this.isDontStop = false;
        }
    };
    RecordComponent.prototype.makeWaveform = function () {
        var analyser = Fr.voice.recorder.analyser;
        var bufferLength = analyser.frequencyBinCount;
        var dataArray = new Uint8Array(bufferLength);
        /**
         * The Waveform canvas
         */
        var WIDTH = 500, HEIGHT = 200;
        var $canvaDom = jQuery("#wp-record-level");
        $canvaDom.show().siblings().hide();
        var canvasCtx = $canvaDom[0].getContext("2d");
        canvasCtx.clearRect(0, 0, WIDTH, HEIGHT);
        function draw() {
            var drawVisual = requestAnimationFrame(draw);
            analyser.getByteTimeDomainData(dataArray);
            canvasCtx.fillStyle = 'rgb(200, 200, 200)';
            canvasCtx.fillRect(0, 0, WIDTH, HEIGHT);
            canvasCtx.lineWidth = 2;
            canvasCtx.strokeStyle = 'rgb(0, 0, 0)';
            canvasCtx.beginPath();
            var sliceWidth = WIDTH * 1.0 / bufferLength;
            var x = 0;
            for (var i = 0; i < bufferLength; i++) {
                var v = dataArray[i] / 128.0;
                var y = v * HEIGHT / 2;
                if (i === 0) {
                    canvasCtx.moveTo(x, y);
                }
                else {
                    canvasCtx.lineTo(x, y);
                }
                x += sliceWidth;
            }
            canvasCtx.lineTo(WIDTH, HEIGHT / 2);
            canvasCtx.stroke();
        }
        ;
        draw();
    };
    RecordComponent.prototype.pause = function () {
        this.recorder.pause();
    };
    RecordComponent.prototype.resume = function () {
        this.recorder.resume();
    };
    /**
     * Stop record.
     */
    RecordComponent.prototype.stop = function () {
        var that = this;
        this.recorder.export(function (url) {
            that.upload(url);
        }, "blob");
        this.recorder.stop();
        this.isDontStop = true;
    };
    /**
     * Upload record.
     */
    RecordComponent.prototype.upload = function (url) {
        var _this = this;
        var token = Math.random().toString(36).substr(10);
        var fd = new FormData();
        fd.append('files', url, token + this.mediaOptions.audio.ext);
        fd.append('id', this.idPost);
        this.recordService
            .postRecordUpload(fd, this.idPost)
            .subscribe(function (data) {
            if (data.record) {
                _this.records.push(data.record);
                jQuery('.td-collection').trigger("click");
            }
            else {
                Materialize.toast("<p>The record don't upload :(</p>", 10000);
            }
        }, function (err) {
            Materialize.toast("<p>" + err + "</p>", 10000);
        }, function () { return console.log('done'); });
    };
    /**
     * Remove sure modal.
     *
     * @param recordId
     */
    RecordComponent.prototype.removeSure = function (record) {
        var _this = this;
        this.records.forEach(function (value) {
            if (value.id == record.id) {
                _this.recordRemove = new __WEBPACK_IMPORTED_MODULE_3__record_item_record_item_model__["a" /* Record */](value.post_id, value.id, value.attach_id, value.url, value.name);
                jQuery('#modal-remove-sure').modal('open');
            }
        });
    };
    /**
     * Remove record.
     *
     * @param record
     */
    RecordComponent.prototype.remove = function (record) {
        var _this = this;
        this.recordService
            .getRemoveRecord(this.idPost, record.id)
            .subscribe(function (data) {
            if (data.result) {
                var records = _this.records;
                _this.records = [];
                records.forEach(function (value) {
                    if (value.id != record.id) {
                        _this.records.push(value);
                    }
                });
                jQuery('#modal-remove-sure').modal('close');
                Materialize.toast("<p>Record removed :)</p>", 3000);
                jQuery('#content_ifr').contents().find("p:contains(" + record.id + ")").remove();
            }
            else {
                Materialize.toast("<p>Record don't removed :(</p>", 10000);
            }
        }, function (err) {
            Materialize.toast("<p>" + err.message + "</p>", 10000);
            console.error(err);
        }, function () { return console.log('done'); });
    };
    RecordComponent.prototype.closeModal = function () {
        jQuery('#modal-remove-sure').modal('close');
    };
    RecordComponent.prototype.closeSideNav = function () {
        jQuery('.button-collapse').sideNav('hide');
    };
    RecordComponent.prototype.redirectToHttps = function () {
        if (location.protocol != 'https:') {
            location.href = 'https:' + window.location.href.substring(window.location.protocol.length);
        }
    };
    RecordComponent.prototype.ngOnInit = function () {
        // Modal Initialization.
        jQuery('.modal').modal({
            dismissible: true
        });
        // SideNav Initialization.
        jQuery('.button-collapse').sideNav({
            menuWidth: 300,
            edge: 'right',
            //closeOnClick: true,
            draggable: true
        });
        setTimeout(function () {
            jQuery('#content_ifr').contents().find("strong:contains('wp-record')").each(function () {
                jQuery(this).removeAttr('id');
            });
            jQuery(document).on('click', 'body, p, strong', function (e) {
                jQuery('.td-collection-item').removeClass('td-check-record');
                e.stopPropagation();
            });
            jQuery('#content_ifr').contents().find("p, p:contains('wp-record'), strong, strong:contains('wp-record')").bind('click', function () {
                jQuery('.td-collection-item').removeClass('td-check-record');
                var shortcode = jQuery(this).html();
                if (shortcode.indexOf('id') >= 0) {
                    shortcode = shortcode.replace(/\[/g, ' ');
                    shortcode = shortcode.replace(/\]/g, ' ');
                    shortcode = shortcode.split(' ');
                    shortcode.forEach(function (value) {
                        if (value.indexOf('id') >= 0) {
                            var id = value.split('="')[1];
                            if (id) {
                                id = id.substring(0, id.length - 1);
                                var $itemRecord = jQuery('#record-' + id);
                                if ($itemRecord.length > 0) {
                                    $itemRecord.addClass('td-check-record');
                                    var $modalShortcode = jQuery('#modal-shortcode');
                                    $modalShortcode.find('.sht-title').html($itemRecord.find('.title').html());
                                    $modalShortcode.find('audio').attr('src', $itemRecord.find('audio').attr('src'));
                                    $modalShortcode.modal('open');
                                }
                            }
                        }
                    });
                }
            });
        }.bind(this), 1000);
        /**
         * Check browser https and support.
         */
        // Fix up for prefixing
        window.AudioContext = window.AudioContext || window.webkitAudioContext;
        navigator.getUserMedia = navigator.getUserMedia
            || navigator.webkitGetUserMedia
            || navigator.mozGetUserMedia
            || navigator.msGetUserMedia;
        if (navigator.getUserMedia === false) {
            this.isDontBrowserSupportHttps = true;
            this.isDontBrowserSupportHttpsMessage = 'Media Record is not supported in your browser, maybe is a good idea update your browser :)';
        }
        var chrome = navigator.userAgent.match(/Chrome/i);
        var safari = navigator.userAgent.match(/Safari/i);
        if (((chrome != null && chrome.length > 0) || (safari != null && safari.length > 0)) && window.location.protocol === 'http:') {
            this.isDontBrowserSupportHttps = true;
            this.isDontBrowserSupportHttpsMessage = 'getUserMedia() no longer works on insecure origins. ' +
                'To use this feature, you should consider switching your wordpress page to a secure origin, ' +
                'such as HTTPS. See https://goo.gl/rStTGz for more details.';
        }
    };
    return RecordComponent;
}());
RecordComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* Component */])({
        selector: 'record',
        template: __webpack_require__(207),
        styles: [__webpack_require__(203)],
        providers: [__WEBPACK_IMPORTED_MODULE_2__record_service__["a" /* RecordService */]],
        encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* ViewEncapsulation */].None
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__record_service__["a" /* RecordService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__record_service__["a" /* RecordService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__td_issues_td_issues_service__["a" /* TdIssuesService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__td_issues_td_issues_service__["a" /* TdIssuesService */]) === "function" && _b || Object])
], RecordComponent);

var _a, _b;
//# sourceMappingURL=/home/victor/PhpstormProjects/LIONTUDE/wp-record/admin/src/record.component.js.map

/***/ }),

/***/ 146:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__td_issues_service__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__td_issues_model__ = __webpack_require__(91);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TdIssuesComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var TdIssuesComponent = (function () {
    function TdIssuesComponent(issuesService, formBuilder) {
        var _this = this;
        this.issuesService = issuesService;
        this.issue = new __WEBPACK_IMPORTED_MODULE_3__td_issues_model__["a" /* TdIssuesModel */](null);
        this.sendMessage = false;
        this.imageRandom = 'https://dl.dropboxusercontent.com/u/101447754/liontude/funny.webp';
        this.issuesService.currentIssue.subscribe(function (value) {
            if (value.isError) {
                _this.showForm = true;
                _this.issue.errorMessage = value.newIssue;
                _this.issue.subject = 'Message to Liontude from WP-Record Plugin';
                _this.issue.name = _this.currentUser.firstname + ' ' + _this.currentUser.user_lastname;
                _this.issue.message = '';
                _this.issue.emailFrom = _this.currentUser.user_email;
                _this.issue.extraData = {};
                jQuery('#modal-td-issues').modal('open');
            }
        });
        this.itemForm = formBuilder.group({
            'errorMessage': [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].required],
            'subject': [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].required],
            'name': [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].required],
            'message': [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].required],
            'emailFrom': [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].required],
            'extraData': [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].required],
        });
        this.issuesService
            .getCurrentUser()
            .subscribe(function (data) {
            _this.currentUser = data.user;
            _this.pluginId = data.plugin_id;
        }, function (err) {
            Materialize.toast("<p>" + err.message + "</p>", 10000);
            console.error(err);
        }, function () { return console.log('done'); });
    }
    TdIssuesComponent.prototype.onSubmit = function (value) {
        var _this = this;
        this.sendMessage = true;
        value.errorMessage = this.issue.errorMessage;
        value.extraData = {
            pluginId: this.pluginId,
            pluginName: 'WP Record',
            slugName: 'wp-record',
            version: '0.1.0',
            url: jQuery('#wp-admin-bar-view a').attr('href')
        };
        //this.issuesService
        //  .postSendIssue(value)
        //  .subscribe((data:any) => {
        //      if (data) {
        //        this.showForm = false;
        //        this.sendMessage = false;
        //        this.messageApi = data.data;
        //        this.imageRandom = this.messageApi.funnyImage;
        //        //jQuery('#modal-td-issues').modal('close');
        //      }
        //    },
        //    err => {
        //      Materialize.toast(`<p>${err}</p>`, 10000);
        //      setTimeout(() => {
        //        jQuery('#modal-td-issues').modal('close');
        //      }, 3000)
        //    },
        //    () => console.log('done')
        //  );
        this.issuesService
            .postSendIssueByEmail(value)
            .subscribe(function (data) {
            if (data) {
                _this.showForm = false;
                _this.sendMessage = false;
                _this.messageApi = data.data;
                //this.imageRandom = this.messageApi.funnyImage;
            }
        }, function (err) {
            Materialize.toast("<p>" + err + "</p>", 10000);
            setTimeout(function () {
                jQuery('#modal-td-issues').modal('close');
            }, 3000);
        }, function () { return console.log('done'); });
    };
    TdIssuesComponent.prototype.closeModal = function () {
        jQuery('#modal-td-issues').modal('close');
    };
    TdIssuesComponent.prototype.ngOnInit = function () {
        // Modal Initialization.
        jQuery('.modal').modal({
            dismissible: true
        });
    };
    return TdIssuesComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Input */])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__td_issues_model__["a" /* TdIssuesModel */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__td_issues_model__["a" /* TdIssuesModel */]) === "function" && _a || Object)
], TdIssuesComponent.prototype, "issue", void 0);
TdIssuesComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* Component */])({
        selector: 'td-issues',
        template: __webpack_require__(208),
        styles: [__webpack_require__(204)],
        providers: [],
        encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* ViewEncapsulation */].None,
        outputs: []
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__td_issues_service__["a" /* TdIssuesService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__td_issues_service__["a" /* TdIssuesService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* FormBuilder */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* FormBuilder */]) === "function" && _c || Object])
], TdIssuesComponent);

var _a, _b, _c;
//# sourceMappingURL=/home/victor/PhpstormProjects/LIONTUDE/wp-record/admin/src/td-issues.component.js.map

/***/ }),

/***/ 147:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: true
};
//# sourceMappingURL=/home/victor/PhpstormProjects/LIONTUDE/wp-record/admin/src/environment.js.map

/***/ }),

/***/ 201:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(26)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 202:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(26)(false);
// imports


// module
exports.push([module.i, "main.record .record-load {\n  visibility: hidden; }\n\nmain.record .td-collection-item {\n  min-height: 43px;\n  border-bottom: 1px solid #e0e0e0;\n  position: relative;\n  padding-left: 9px !important;\n  padding: 7px 2px 0px;\n  background-color: #fff;\n  line-height: 1.5rem;\n  margin: 0; }\n  main.record .td-collection-item .title {\n    font-size: 16px;\n    cursor: pointer; }\n  main.record .td-collection-item audio {\n    margin-top: 5px; }\n  main.record .td-collection-item .td-controls {\n    top: 4px;\n    right: 6px;\n    position: absolute; }\n    main.record .td-collection-item .td-controls.secondary-content {\n      color: #F44336; }\n    main.record .td-collection-item .td-controls i {\n      cursor: pointer;\n      background-color: #fff !important; }\n  main.record .td-collection-item input[type=text] {\n    height: 39px; }\n  main.record .td-collection-item .td-record-name-input button {\n    width: 30px;\n    height: 30px;\n    position: absolute;\n    right: 6px;\n    top: 22px; }\n    main.record .td-collection-item .td-record-name-input button i {\n      line-height: 30px; }\n  main.record .td-collection-item .td-title-checkbox {\n    margin: 0px 0px 8px; }\n    main.record .td-collection-item .td-title-checkbox label {\n      font-size: 13px;\n      padding-left: 32px; }\n      main.record .td-collection-item .td-title-checkbox label:before {\n        width: 12px;\n        height: 12px;\n        left: 8px;\n        top: 2px; }\n    main.record .td-collection-item .td-title-checkbox [type=\"checkbox\"]:checked + label:before {\n      width: 4px;\n      height: 12px;\n      left: 7px;\n      top: 0px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 203:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(26)(false);
// imports


// module
exports.push([module.i, "main.record .record-load {\n  visibility: hidden; }\n\nmain.record .td-badge-record {\n  margin-top: 4px;\n  font-size: 0.7rem !important; }\n\nmain.record .td-open-side-nav {\n  float: right;\n  color: #424242;\n  cursor: pointer;\n  margin-top: 6px; }\n\nmain.record .td-video {\n  position: absolute;\n  right: 16px; }\n\nmain.record .td-modal-video {\n  width: 32%;\n  max-height: 64%;\n  overflow: hidden; }\n  main.record .td-modal-video .video-responsive {\n    height: 0;\n    overflow: hidden;\n    padding-bottom: 56.25%;\n    padding-top: 30px;\n    position: relative; }\n    main.record .td-modal-video .video-responsive iframe, main.record .td-modal-video .video-responsive object, main.record .td-modal-video .video-responsive embed {\n      height: 100%;\n      left: 0;\n      position: absolute;\n      top: 0;\n      width: 100%; }\n\nmain.record .side-nav {\n  width: 314px;\n  overflow: auto; }\n  main.record .side-nav .td-close {\n    position: absolute;\n    top: 48px;\n    right: 0px;\n    cursor: pointer;\n    z-index: 999;\n    color: #757575; }\n  main.record .side-nav li {\n    line-height: 19px; }\n    main.record .side-nav li .card-panel {\n      margin: -1px 0 0 0;\n      border-radius: 0px; }\n\nmain.record #modal-remove-sure.open {\n  border-top: 4px solid #f44336;\n  z-index: 9991 !important; }\n\nmain.record #modal-remove-sure.modal {\n  width: 40%; }\n  @media screen and (min-width: 320px) and (max-width: 767px) {\n    main.record #modal-remove-sure.modal {\n      width: 80%; } }\n\nmain.record #modal-remove-sure .collection {\n  margin-top: 10px; }\n  main.record #modal-remove-sure .collection li {\n    min-height: 65px !important; }\n\nmain.record .record-level #wp-record-level {\n  display: none;\n  width: 100%;\n  height: 69px; }\n\nmain.record .blockquote-warning {\n  border-left: 5px solid #ffeb3b; }\n\n@-webkit-keyframes fontbulger {\n  0% {\n    font-size: 5px; }\n  30% {\n    font-size: 10px; }\n  100% {\n    font-size: 11px; } }\n\n@keyframes fontbulger {\n  0% {\n    font-size: 5px; }\n  30% {\n    font-size: 10px; }\n  100% {\n    font-size: 11px; } }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 204:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(26)(false);
// imports


// module
exports.push([module.i, "@media screen and (min-width: 320px) and (max-width: 767px) {\n  main.td-issues .modal {\n    width: 100%; } }\n\nmain.td-issues .td-response-api {\n  padding-top: 12px; }\n  main.td-issues .td-response-api .card {\n    margin-left: auto;\n    margin-right: auto;\n    padding: 0px; }\n    main.td-issues .td-response-api .card .card-title.activator {\n      line-height: 11px; }\n    main.td-issues .td-response-api .card .card-image {\n      height: 300px;\n      background-repeat: no-repeat;\n      background-position: 0% 50%;\n      background-size: cover; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 205:
/***/ (function(module, exports) {

module.exports = "<main>\n  <record></record>\n  <td-issues></td-issues>\n</main>";

/***/ }),

/***/ 206:
/***/ (function(module, exports) {

module.exports = "<div id=\"record-{{ record.id }}\" class=\"td-collection-item avatar without-icon\">\n  <span *ngIf=\"!showEditInput\" (click)=\"showInput()\" class=\"title\">{{ record.name || 'Set name (optional)' }}</span>\n\n  <div *ngIf=\"showEditInput\" class=\"input-field td-record-name-input\">\n    <form [formGroup]=\"itemForm\"\n          (ngSubmit)=\"onSubmit(itemForm.value)\">\n      <button class=\"btn-floating btn-small waves-effect waves-light\">\n        <i class=\"material-icons\">done</i>\n      </button>\n      <input [formControl]=\"itemForm.get('name')\"\n             [ngModel]=\"record.name\"\n             id=\"name\"\n             type=\"text\"\n             class=\"validate\"\n             autocomplete=\"off\">\n      <label for=\"name\" [ngClass]=\"{active: record.name}\">Set name (optional)</label>\n    </form>\n  </div>\n\n  <audio controls=\"\" src=\"{{ record.url }}\"></audio>\n\n  <div class=\"td-controls secondary-content white\">\n    <!--<i class=\"material-icons\">file_download</i>-->\n    <i (click)=\"removeSure()\" class=\"material-icons red\">delete</i>\n  </div>\n\n  <div class=\"chip td-shortcode\">\n    <strong (click)=\"selectText(record.id)\" id=\"select-{{ record.id }}\">[wp-record id=\"{{ record.id }}\"]</strong>\n  </div>\n\n  <p class=\"td-title-checkbox\">\n    <input id=\"{{ record.id }}\" *ngIf=\"record.showTitle\" (click)=\"setShowTitle(false); $event.stopPropagation()\" type=\"checkbox\" checked=\"checked\"/>\n    <input id=\"{{ record.id }}\" *ngIf=\"!record.showTitle\" (click)=\"setShowTitle(true); $event.stopPropagation()\" type=\"checkbox\"/>\n    <label for=\"{{ record.id }}\">Show name in frontend?</label>\n  </p>\n</div>";

/***/ }),

/***/ 207:
/***/ (function(module, exports, __webpack_require__) {

module.exports = "<main class=\"record\">\n\n  <div class=\"col s12 record-level\">\n    <div *ngIf=\"isDontBrowserSupportHttps\">\n      <blockquote class=\"blockquote-warning\">\n        Warning: getUserMedia() no longer works on insecure origins. To use this\n        feature, you\n        should consider switching your wordpress page to a secure origin, such as\n        HTTPS.\n        See <a target=\"_blank\" href=\"https://goo.gl/rStTGz\">https://goo.gl/rStTGz</a>\n        for more\n        details.\n\n        <br/>\n        <br/>\n        Some web browsers only allow you to record voice if they are on HTTPS\n        connection.\n\n        <br/>\n        <a (click)=\"redirectToHttps()\" class=\"btn waves-effect waves-light\">Redirect\n                                                                            to\n                                                                            HTTPS</a>\n      </blockquote>\n    </div>\n\n    <div *ngIf=\"isDontInputDevice && isDontInputDeviceMessage\">\n      <blockquote class=\"blockquote-error\">\n        {{ isDontInputDeviceMessage }}\n      </blockquote>\n    </div>\n\n    <a href=\"#modal-youtube-video\" class=\"td-open-side-nav td-video show-on-large modal-trigger\"><i class=\"material-icons small\">help_outline</i></a>\n\n    <img src=\"" + __webpack_require__(484) + "\"/>\n    <canvas id=\"wp-record-level\" height=\"200\"></canvas>\n  </div>\n\n  <i class=\"material-icons record-load\">play_arrow</i>\n\n  <div class=\"col s12 td-control-btn\">\n    <div id=\"slide-out\" class=\"side-nav\">\n      <i (click)=\"closeSideNav()\" class=\"td-close material-icons left small\">close</i>\n      <ul>\n        <li>\n          <div class=\"userView\">\n            <div class=\"td-liontude-background background\"></div>\n            <a href=\"http://www.liontude.com\"><img class=\"circle td-liontude-logo\" src=\"" + __webpack_require__(481) + "\"></a>\n            <a href=\"http://www.liontude.com\"><span class=\"white-text name\">LIONTUDE</span></a>\n          </div>\n        </li>\n        <li style=\"margin-top: 34px;\">\n          <div class=\"card-panel teal\">\n          <span class=\"white-text\">\n            <h6 class=\"center-align\">Record the posts and play them in the front\n                                     end.</h6>\n            <h6 class=\"center-align\">We want to stay with you, we need your\n                                     suggestions.</h6>\n          </span>\n            <br>\n            <a href=\"mailto:wprecordlt@gmail.com\" class=\"waves-effect waves-light btn\">Send\n                                                                                       Email</a>\n            <a href=\"https://www.paypal.me/wprecord\" class=\"waves-effect waves-light btn\">Donate</a>\n          </div>\n        </li>\n        <li></li>\n      </ul>\n    </div>\n    <a href=\"#\" data-activates=\"slide-out\" class=\"td-open-side-nav button-collapse show-on-large\"><i class=\"material-icons small\">menu</i></a>\n\n    <div id=\"modal-youtube-video\" class=\"td-modal-video modal modal-fixed-footer\">\n      <div class=\"video-responsive\">\n        <iframe src=\"https://www.youtube.com/embed/6mwDQBvmYIE?rel=0\" frameborder=\"0\" gesture=\"media\" allow=\"encrypted-media\" allowfullscreen></iframe>\n      </div>\n      <div class=\"modal-footer\">\n        <a href=\"#!\" class=\"modal-action modal-close waves-effect waves-green btn-flat \">Close</a>\n      </div>\n    </div>\n\n    <div *ngIf=\"!isDontBrowserSupportHttps\">\n      <span *ngIf=\"isRecord && !isPaused && !isDontRecord && !isDontInputDevice\" class=\"new badge red td-badge-record\" data-badge-caption=\"Recording\"></span>\n      <span *ngIf=\"isRecord && isPaused\" class=\"new badge red td-badge-record\" data-badge-caption=\"Recording Pause\"></span>\n      <a *ngIf=\"!isRecord || isDontInputDevice\" (click)=\"record(); isRecord = true; isPaused = false\" [ngClass]=\"{disabled: isDontRecord}\" class=\"waves-effect waves-light btn red\"><i class=\"material-icons left\">fiber_manual_record</i></a>\n      <a *ngIf=\"isRecord && !isPaused && !isDontInputDevice\" (click)=\"pause(); isPaused = true; isResume = false\" [ngClass]=\"{disabled: isDontRecord}\" class=\"waves-effect waves-light btn\"><i class=\"material-icons left\">pause</i></a>\n      <a *ngIf=\"isRecord && isPaused && !isResume && !isDontInputDevice\" (click)=\"resume(); isPaused = false; isResume = true\" [ngClass]=\"{disabled: isDontRecord}\" class=\"waves-effect waves-light btn\"><i class=\"material-icons left\">fiber_manual_record</i></a>\n      <a (click)=\"stop(); isRecord = false\" [ngClass]=\"{disabled: isDontStop}\" class=\"waves-effect waves-light btn grey darken-3\"><i class=\"material-icons left\">stop</i></a>\n    </div>\n\n    <div *ngIf=\"isDontBrowserSupportHttps\">\n      <a *ngIf=\"!isRecord\" (click)=\"record();\" class=\"disabled waves-effect waves-light btn yellow\"><i class=\"material-icons left\">fiber_manual_record</i></a>\n      <a class=\"disabled waves-effect waves-light btn grey darken-3\"><i class=\"material-icons left\">stop</i></a>\n    </div>\n  </div>\n\n  <div class=\"col s12\">\n    <div *ngIf=\"!records\" class=\"progress\">\n      <div class=\"indeterminate\"></div>\n    </div>\n\n    <div class=\"td-collection collection z-depth-3\">\n      <record-item class=\"record-item\"\n                   *ngFor=\"let record of records\"\n                   [record]=\"record\"\n                   (onRecordSelected)=\"removeSure($event)\"\n      >\n      </record-item>\n    </div>\n\n    <div class=\"td-no-records\" *ngIf=\"records.length === 0\">\n      <nav class=\"top-nav teal\">\n        <div class=\"container\">\n          <div class=\"nav-wrapper\">\n            <a class=\"page-title\">Create your first Record.</a>\n          </div>\n        </div>\n      </nav>\n    </div>\n\n    <!-- Modal Sure Remove -->\n    <div id=\"modal-remove-sure\" class=\"modal\">\n      <div *ngIf=\"recordRemove\" class=\"modal-content\">\n        <h5>Remove Record. Are you sure?</h5>\n        <ul class=\"collection\">\n          <li class=\"collection-item avatar\">\n            <i class=\"material-icons circle red\">play_arrow</i>\n            <span class=\"title\">{{ recordRemove.name || 'Set name' }}</span>\n\n            <p>\n              {{ recordRemove.description }}\n            </p>\n            <audio controls=\"\" src=\"{{ recordRemove.url }}\"></audio>\n          </li>\n        </ul>\n        <a (click)=\"remove(recordRemove)\" (onRemove)=\"remove($event)\" class=\"waves-effect waves-red btn red\">\n          <i class=\"material-icons left\">delete</i>\n          Yes, Remove\n        </a>\n        <a (click)=\"closeModal()\" class=\"waves-effect waves-light btn-flat\">Cancel</a>\n      </div>\n    </div>\n\n    <!-- Modal Shortcode -->\n    <div id=\"modal-shortcode\" class=\"modal\">\n      <div class=\"modal-content\">\n        <ul class=\"collection\">\n          <li class=\"collection-item avatar\">\n            <span class=\"sht-title\"></span>\n\n            <p></p>\n            <audio controls=\"\" src=\"\"></audio>\n          </li>\n        </ul>\n        <a class=\"waves-effect waves-light btn grey darken-3 modal-action modal-close\">Close</a>\n      </div>\n    </div>\n  </div>\n</main>";

/***/ }),

/***/ 208:
/***/ (function(module, exports) {

module.exports = "<main class=\"td-issues\">\n  <!-- Liontude issues -->\n  <div id=\"modal-td-issues\" class=\"modal\">\n    <div class=\"modal-content\">\n      <h5>REPORT AN ISSUE</h5>\n\n      <p>\n        Send this error to Liontude Support to fix.\n      </p>\n\n      <div class=\"row\">\n        <div *ngIf=\"sendMessage\" class=\"progress\">\n          <div class=\"indeterminate\"></div>\n        </div>\n\n        <div class=\"col s12 m6\">\n          <div *ngIf=\"showForm\" class=\"card hoverable red darken-1\">\n            <div class=\"card-content white-text\">\n              <span class=\"card-title\">ERROR:</span>\n\n              <p>{{ issue.errorMessage }}</p>\n            </div>\n          </div>\n\n          <div *ngIf=\"messageApi && !showForm\" class=\"td-response-api\">\n            <div class=\"card small hoverable sticky-action\" style=\"overflow: hidden;\">\n              <div class=\"card-image waves-effect waves-block waves-light\" [ngStyle]=\"{'background-image': 'url(' + imageRandom + ')'}\">\n              </div>\n              <div class=\"card-content\">\n                <span class=\"card-title activator grey-text text-darken-4\">{{ messageApi.subject }}<i class=\"material-icons right\">more_vert</i></span>\n\n                <p>{{ messageApi.msg }}</p>\n              </div>\n\n              <div *ngIf=\"messageApi.url\" class=\"card-action\">\n                <a href=\"{{ messageApi.url.url }}\">{{ messageApi.url.name }}</a>\n              </div>\n\n              <div class=\"card-reveal\" style=\"display: none; transform: translateY(0px);\">\n                <span class=\"card-title grey-text text-darken-4\"><i class=\"material-icons right\">close</i></span>\n\n                <div class=\"card hoverable red darken-1\" style=\"margin-top: 28px;\">\n                  <div class=\"card-content white-text\">\n                    <span class=\"card-title\">ERROR:</span>\n\n                    <p>{{ issue.errorMessage }}</p>\n                  </div>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n\n        <div class=\"col s12 m6\">\n          <form [formGroup]=\"itemForm\"\n                (ngSubmit)=\"onSubmit(itemForm.value)\"\n                class=\"col s12\">\n            <div class=\"row\">\n              <div class=\"input-field col s6\">\n                <input [formControl]=\"itemForm.get('name')\"\n                       [ngModel]=\"issue.name\"\n                       id=\"name\"\n                       type=\"text\"\n                       class=\"validate\"\n                       autocomplete=\"off\">\n                <label [ngClass]=\"{active: issue.name}\" for=\"name\">\n                  First Name\n                </label>\n              </div>\n\n              <div class=\"input-field col s6\">\n                <input [formControl]=\"itemForm.get('emailFrom')\"\n                       [ngModel]=\"issue.emailFrom\"\n                       id=\"emailFrom\"\n                       type=\"email\"\n                       class=\"validate\"\n                       autocomplete=\"off\">\n                <label [ngClass]=\"{active: issue.emailFrom}\" for=\"emailFrom\">\n                  Email\n                </label>\n              </div>\n            </div>\n\n            <div class=\"row\">\n              <div class=\"input-field col s12\">\n                <input [formControl]=\"itemForm.get('subject')\"\n                       [ngModel]=\"issue.subject\"\n                       id=\"subject\"\n                       type=\"text\"\n                       class=\"validate\"\n                       autocomplete=\"off\">\n                <label [ngClass]=\"{active: issue.subject}\" for=\"subject\">\n                  Subject\n                </label>\n              </div>\n\n              <div class=\"input-field col s12\" style=\"margin-bottom: -43px;\">\n                <textarea [formControl]=\"itemForm.get('message')\"\n                          [ngModel]=\"issue.message\"\n                          id=\"message\"\n                          class=\"materialize-textarea\"\n                          autocomplete=\"off\"></textarea>\n                <label [ngClass]=\"{active: issue.message}\" for=\"message\">\n                  Message (optional)\n                </label>\n              </div>\n            </div>\n\n            <div class=\"row\">\n              <div class=\"input-field col s12\">\n                <button *ngIf=\"showForm\" class=\"waves-effect waves-red btn\">\n                  <i class=\"material-icons right\">send</i>\n                  Send\n                </button>\n                <a *ngIf=\"showForm\" (click)=\"closeModal()\" class=\"waves-effect waves-light btn-flat\">Cancel</a>\n                <a *ngIf=\"!showForm\" (click)=\"closeModal()\" class=\"waves-effect waves-light btn grey darken-3\">Close</a>\n              </div>\n            </div>\n          </form>\n        </div>\n      </div>\n    </div>\n  </div>\n</main>";

/***/ }),

/***/ 481:
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),

/***/ 484:
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAPwAAABDCAIAAAA3Vf+QAAAAA3NCSVQICAjb4U/gAAAAEHRFWHRTb2Z0d2FyZQBTaHV0dGVyY4LQCQAAAJ1JREFUeNrt3TERAAAIAzHAv7DKwgckErgfutFJCj4ZJ0D0IHoQPYgeRA+iB9GD6EH0IHoQPYgeRA+iB9EjehA9iB5ED6IH0YPoQfQgehA9iB5ED6IH0YPoET0AF7VPJJg3IHoQPYgeRA+iB9GD6EH0IHoQPYgeRA+iB9EjehA9iB5ED6IH0YPoQfQgehA9iB5ED6IH0YPoET2IHi5apasFM6rG/3sAAAAASUVORK5CYII="

/***/ }),

/***/ 486:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(137);


/***/ }),

/***/ 57:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs__ = __webpack_require__(210);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__td_issues_model__ = __webpack_require__(91);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TdIssuesService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var TdIssuesService = (function () {
    function TdIssuesService(http) {
        this.http = http;
        this.currentIssue = new __WEBPACK_IMPORTED_MODULE_1_rxjs__["BehaviorSubject"](new __WEBPACK_IMPORTED_MODULE_4__td_issues_model__["a" /* TdIssuesModel */](null));
    }
    TdIssuesService.prototype.setCurrentIssue = function (newIssue, isError) {
        var sendStream = {
            newIssue: newIssue,
            isError: isError
        };
        this.currentIssue.next(sendStream);
    };
    TdIssuesService.prototype.getCurrentUser = function () {
        var params = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* URLSearchParams */]();
        params.set('action', 'get_current_user');
        return this.http
            .get(ajaxurl, {
            search: params
        })
            .map(function (res) { return res.json(); });
    };
    TdIssuesService.prototype.postSendIssue = function (issue) {
        return this.http
            .post('http://localhost:3000/api/issues', issue, this.getTokenPostOptions())
            .map(function (res) { return res.json(); });
    };
    TdIssuesService.prototype.postSendIssueByEmail = function (issue) {
        var params = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* URLSearchParams */]();
        params.set('issue', JSON.stringify(issue));
        return this.http
            .post(ajaxurl + "?action=post_issue_email", params, this.getTokenPostOptions())
            .map(function (res) { return res.json(); });
    };
    /**
     * Change token request.
     *
     * @returns {RequestOptions}
     */
    TdIssuesService.prototype.getTokenPostOptions = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["c" /* Headers */]();
        headers.set('Accept', 'application/json');
        var options = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["d" /* RequestOptions */]({
            headers: headers
        });
        return options;
    };
    return TdIssuesService;
}());
TdIssuesService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_http__["e" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_http__["e" /* Http */]) === "function" && _a || Object])
], TdIssuesService);

var _a;
//# sourceMappingURL=/home/victor/PhpstormProjects/LIONTUDE/wp-record/admin/src/td-issues.service.js.map

/***/ }),

/***/ 87:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 87;


/***/ }),

/***/ 89:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Record; });
var Record = (function () {
    function Record(post_id, id, attach_id, url, name, description, showTitle) {
        this.post_id = post_id;
        this.id = id;
        this.attach_id = attach_id;
        this.url = url;
        this.name = name;
        this.description = description;
        this.showTitle = showTitle;
    }
    return Record;
}());

//# sourceMappingURL=/home/victor/PhpstormProjects/LIONTUDE/wp-record/admin/src/record-item.model.js.map

/***/ }),

/***/ 90:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RecordService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var RecordService = (function () {
    function RecordService(http) {
        this.http = http;
    }
    /**
     * Get all records by post.
     *
     * @param postId
     * @returns {any}
     */
    RecordService.prototype.getRecords = function (postId) {
        var params = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* URLSearchParams */]();
        params.set('action', 'get_records');
        params.set('post_id', postId);
        return this.http
            .get(ajaxurl, {
            search: params
        })
            .map(function (res) { return res.json(); });
    };
    /**
     * Upload audio record.
     *
     * @param formData
     * @param postId
     * @returns {any}
     */
    RecordService.prototype.postRecordUpload = function (formData, postId) {
        return this.http
            .post(ajaxurl + "?action=post_upload_record", formData, this.getTokenPostOptions())
            .map(function (res) { return res.json(); });
    };
    /**
     * Post all records.
     *
     * @param records
     * @param postId
     * @returns {any}
     */
    RecordService.prototype.postRecords = function (records, postId) {
        var params = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* URLSearchParams */]();
        var idRecords = [];
        records.forEach(function (value) {
            idRecords.push(value.id);
        });
        params.set('records', JSON.stringify(idRecords));
        params.set('post_id', postId);
        return this.http
            .post(ajaxurl + "?action=post_upload_records", params, this.getTokenPostOptions())
            .map(function (res) { return res.json(); });
    };
    /**
     * Post update single record.
     *
     * @param record
     * @param postId
     * @returns {any}
     */
    RecordService.prototype.postUpdateRecord = function (record, postId) {
        var params = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* URLSearchParams */]();
        params.set('record', JSON.stringify(record));
        params.set('post_id', postId);
        return this.http
            .post(ajaxurl + "?action=post_update_record", params, this.getTokenPostOptions())
            .map(function (res) { return res.json(); });
    };
    /**
     * Change token request.
     *
     * @returns {RequestOptions}
     */
    RecordService.prototype.getTokenPostOptions = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Headers */]();
        headers.set('Accept', 'application/json');
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({
            headers: headers
        });
        return options;
    };
    /**
     * Remove record from post.
     *
     * @param postId
     * @param recordId
     * @returns {any}
     */
    RecordService.prototype.getRemoveRecord = function (postId, recordId) {
        var params = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* URLSearchParams */]();
        params.set('action', 'get_remove_record');
        params.set('post_id', postId);
        params.set('record_id', recordId);
        return this.http
            .get(ajaxurl, {
            search: params
        })
            .map(function (res) { return res.json(); });
    };
    return RecordService;
}());
RecordService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* Http */]) === "function" && _a || Object])
], RecordService);

var _a;
//# sourceMappingURL=/home/victor/PhpstormProjects/LIONTUDE/wp-record/admin/src/record.service.js.map

/***/ }),

/***/ 91:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TdIssuesModel; });
var TdIssuesModel = (function () {
    function TdIssuesModel(errorMessage, subject, name, message, emailFrom, extraData) {
        this.errorMessage = errorMessage;
        this.subject = subject;
        this.name = name;
        this.message = message;
        this.emailFrom = emailFrom;
        this.extraData = extraData;
    }
    return TdIssuesModel;
}());

//# sourceMappingURL=/home/victor/PhpstormProjects/LIONTUDE/wp-record/admin/src/td-issues.model.js.map

/***/ })

},[486]);
//# sourceMappingURL=main.bundle.js.map