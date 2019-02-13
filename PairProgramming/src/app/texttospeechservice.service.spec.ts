import { TestBed } from '@angular/core/testing';

import { TexttospeechserviceService } from './texttospeechservice.service';

describe('TexttospeechserviceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TexttospeechserviceService = TestBed.get(TexttospeechserviceService);
    expect(service).toBeTruthy();
  });
});
