import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AdminUsersPage } from './admin-users.page';

describe('AdminUsersPage', () => {
  let component: AdminUsersPage;
  let fixture: ComponentFixture<AdminUsersPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminUsersPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AdminUsersPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
