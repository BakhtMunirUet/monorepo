import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AccessDeniedPortalComponent } from './access-denied-portal.component';


describe('AccessDeniedPortalComponent', () => {
  let component: AccessDeniedPortalComponent;
  let fixture: ComponentFixture<AccessDeniedPortalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccessDeniedPortalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AccessDeniedPortalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
