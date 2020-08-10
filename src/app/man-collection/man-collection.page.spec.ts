import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ManCollectionPage } from './man-collection.page';

describe('ManCollectionPage', () => {
  let component: ManCollectionPage;
  let fixture: ComponentFixture<ManCollectionPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManCollectionPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ManCollectionPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
