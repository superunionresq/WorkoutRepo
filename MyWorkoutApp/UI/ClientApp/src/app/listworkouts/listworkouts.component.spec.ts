/// <reference path="../../../../node_modules/@types/jasmine/index.d.ts" />
import { TestBed, async, ComponentFixture, ComponentFixtureAutoDetect } from '@angular/core/testing';
import { BrowserModule, By } from "@angular/platform-browser";
import { ListworkoutsComponent } from './listworkouts.component';

let component: ListworkoutsComponent;
let fixture: ComponentFixture<ListworkoutsComponent>;

describe('listworkouts component', () => {
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ ListworkoutsComponent ],
            imports: [ BrowserModule ],
            providers: [
                { provide: ComponentFixtureAutoDetect, useValue: true }
            ]
        });
        fixture = TestBed.createComponent(ListworkoutsComponent);
        component = fixture.componentInstance;
    }));

    it('should do something', async(() => {
        expect(true).toEqual(true);
    }));
});