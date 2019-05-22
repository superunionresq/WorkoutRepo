/// <reference path="../../../../node_modules/@types/jasmine/index.d.ts" />
import { TestBed, async, ComponentFixture, ComponentFixtureAutoDetect } from '@angular/core/testing';
import { BrowserModule, By } from "@angular/platform-browser";
import { ListcategoriesComponent } from './listcategories.component';

let component: ListcategoriesComponent;
let fixture: ComponentFixture<ListcategoriesComponent>;

describe('listcategories component', () => {
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ ListcategoriesComponent ],
            imports: [ BrowserModule ],
            providers: [
                { provide: ComponentFixtureAutoDetect, useValue: true }
            ]
        });
        fixture = TestBed.createComponent(ListcategoriesComponent);
        component = fixture.componentInstance;
    }));

    it('should do something', async(() => {
        expect(true).toEqual(true);
    }));
});