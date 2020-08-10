import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { GirlCollectionPage } from './girl-collection.page';

describe('GirlCollectionPage', () => {
  let component: GirlCollectionPage;
  let fixture: ComponentFixture<GirlCollectionPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GirlCollectionPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(GirlCollectionPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
