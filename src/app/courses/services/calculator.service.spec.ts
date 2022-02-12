import {CalculatorService} from "./calculator.service";
import {LoggerService} from "./logger.service";
import {TestBed} from "@angular/core/testing";

let calculator: CalculatorService,
    loggerSpy: any;

beforeEach( () =>{
  loggerSpy = jasmine.createSpyObj('LoggerService', ['log']);

  TestBed.configureTestingModule({
    providers: [
      CalculatorService,
      {provide: LoggerService, useValue: loggerSpy}
    ]
  })

  calculator = TestBed.inject(CalculatorService);


})


describe('CalculatorService' , () => {

  it('should add two numbers',  () => {

 //example if on
    //logger.log.returnValue();

    const result = calculator.add(2,2);

    expect(result).toBe(4);
    expect(loggerSpy.log).toHaveBeenCalledTimes(1);

  });

  it('should subtract two numbers',  () => {
    const result = calculator.subtract(2,2);

    expect(result).toBe(0, "unexpect result");
    expect(loggerSpy.log).toHaveBeenCalledTimes(1);
  });


})
