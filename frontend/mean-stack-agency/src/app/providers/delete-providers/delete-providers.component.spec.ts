import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteProvidersComponent } from './delete-providers.component';

describe('DeleteProvidersComponent', () => {
  let component: DeleteProvidersComponent;
  let fixture: ComponentFixture<DeleteProvidersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DeleteProvidersComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DeleteProvidersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
