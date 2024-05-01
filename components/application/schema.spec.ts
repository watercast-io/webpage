import { z } from "zod";
import { ApplicationSchema } from "./schema";

describe('ApplicationSchema', () => {
  it('accepts valid data', () => {
    const validData = {
      email: 'lorena.claudette.gtz@gmail.com',
      nie: 'Y7750651X',
      expediente: 'R516151',
      fnacimiento: '26/02/1989',
    };

    expect(() => {
      ApplicationSchema.parse(validData);
    }).not.toThrow();
  });

  it('rejects invalid data', () => {
    const invalidData = {
      email: 'lorena.claudette.gtz', // Email inválido
      nie: 'Y7750651X',
      expediente: 'R516151',
      fnacimiento: '26/02/1989',
    };

    expect(() => {
      ApplicationSchema.parse(invalidData);
    }).toThrow(z.ZodError);
  });
});
