﻿/// <reference path="../../../../node_modules/@types/jasmine/index.d.ts" />
import { TestBed, async, ComponentFixture, ComponentFixtureAutoDetect } from '@angular/core/testing';
import { BrowserModule, By } from "@angular/platform-browser";
import { CrudworkoutComponent } from './crudworkout.component';

let component: CrudworkoutComponent;
let fixture: ComponentFixture<CrudworkoutComponent>;

describe('Crudworkout component', () => {
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ CrudworkoutComponent ],
            imports: [ BrowserModule ],
            providers: [
                { provide: ComponentFixtureAutoDetect, useValue: true }
            ]
        });
        fixture = TestBed.createComponent(CrudworkoutComponent);
        component = fixture.componentInstance;
    }));

    it('should do something', async(() => {
        expect(true).toEqual(true);
    }));
});