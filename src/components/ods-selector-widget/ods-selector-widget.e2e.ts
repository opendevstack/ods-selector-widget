import { newE2EPage } from '@stencil/core/testing';

describe('ods-selector-widget', () => {
  it('renders', async () => {
    const page = await newE2EPage();

    await page.setContent('<ods-selector-widget></ods-selector-widget>');
    const element = await page.find('ods-selector-widget');
    expect(element).toHaveClass('hydrated');
  });
});
