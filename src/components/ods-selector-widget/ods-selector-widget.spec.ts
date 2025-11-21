import { newSpecPage } from '@stencil/core/testing';
import { OdsSelectorWidget } from './ods-selector-widget';

const fakeUrl = 'https://www.google.com';
const arrowSvg = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="17" viewBox="0 0 16 17" fill="none"><path fill-rule="evenodd" clip-rule="evenodd" d="M13.0666 7.71332L8.43596 3.20065L8.89729 2.71332L13.3333 6.97998V9.11332L8.89729 13.38L8.43596 12.8926L13.0666 8.37998H2.66663V7.71332H13.0666Z" fill="#191919" /></svg>`;
const squareArrowSvg = `<svg id="Canvas" xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 24 24"><path d="M20.9985977,4.9995999l-1.9966812-1.9995999h-4.9903059v.9998h5.288516l-7.6509237,7.6434295.7093315.7098799,7.6409311-7.6434903.0021935,5.288981h.9983406l-.0014019-4.9990001ZM17.9741436,18.4741383c0,.8269825-.700983,1.526062-1.5316353,1.526062l-10.9466553-.0019531c-.8257766,0-1.4975119-.6727161-1.4975119-1.4997005V7.5427313c0-.8323531.6853848-1.5358257,1.4975119-1.5358257l5.5298748.0009766v-.9998002l-5.5298743-.0009766c-1.3766189,0-2.4958532,1.1374679-2.4958532,2.5356255v10.9558158c0,1.3786297,1.1192343,2.4995003,2.4958532,2.4995003l10.9466548.0019531c1.3717442,0,2.5299759-1.1569958,2.5299759-2.5229321l.0341225-5.4949942-.9983406-.0058584-.0341225,5.4979229Z"/></svg>`;
const infoSvg = `<svg id="Icons" xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 24 24"><path d="M12.0000916,2.9999924c4.962616,0,9,4.0373764,9,9s-4.037384,9-9,9S3.0000916,16.962616,3.0000916,11.9999924,7.0374756,2.9999924,12.0000916,2.9999924M12.0000916,1.9999924C6.4772491,1.9999924,2.0000916,6.47715,2.0000916,11.9999924c0,5.52285,4.4771576,10,10,10s10-4.47715,10-10c0-5.5228424-4.4771576-10-10-10h0ZM12.5,6.5h-1v2h1v-2ZM12.5,10.5h-1v7h1v-7Z"/></svg>`; 
const projectType = 'project';
const externalType = 'external';

describe('ods-selector-widget', () => {
  it('renders', async () => {
    const { root } = await newSpecPage({
      components: [OdsSelectorWidget],
      html: '<ods-selector-widget></ods-selector-widget>',
    });
    expect(root).toEqualHtml(`
      <ods-selector-widget>
        <mock:shadow-root>
          <div class="ods-selector-widget">
            <div class="widget-header">
              <h2>
                PROJECT: PROJECT 1
              </h2>
            </div>
            <div class="widget-content">
          </div>
        </mock:shadow-root>
      </ods-selector-widget>
    `);
  });

  it('renders with values from service', async () => {
    const project = 'PROJECT 1';
    const mockData = {
      sections: [
        {
          section: 'Platforms',
          tooltip: 'Select your platform',
          links: [
            { label: 'Platform One', url: 'https://platform1.com', abbreviation: 'P1', type: 'platform' },
            { label: 'Platform Two', url: 'https://platform2.com', abbreviation: 'P2', type: 'platform', disabled: true },
            { label: 'Platform Three', url: 'https://platform3.com', abbreviation: 'P3', type: 'platform', disabled: true }
          ]
        },
        { 
          section: 'Section One',
          tooltip: 'Here are links for Section One',
          links: [ 
            { label: 'Link One in Section One', url: fakeUrl, tooltip: 'Some tooltip for Link One in Section One', type: projectType },
            { label: 'Link Two in Section One', url: fakeUrl, tooltip: 'Some tooltip for Link Two in Section One', type: projectType },
            { label: 'Link Three in Section One', url: fakeUrl, tooltip: 'Some tooltip for Link Three in Section One', type: projectType },
            { label: 'Link Four in Section One', url: fakeUrl, tooltip: 'Some tooltip for Link Four in Section One', type: projectType },
            { label: 'Link Five in Section One', url: fakeUrl, tooltip: 'Some tooltip for Link Five in Section One', type: externalType },
            { label: 'Link Six in Section One', url: fakeUrl, tooltip: 'Some tooltip for Link Six in Section One', type: externalType },
            { label: 'Link Seven in Section One', url: fakeUrl, tooltip: 'Some tooltip for Link Seven in Section One', type: externalType },
            { label: 'Link Eight in Section One', url: fakeUrl, tooltip: 'Some tooltip for Link Eight in Section One', type: externalType },
          ] 
        },
        { 
          section: 'Section Two', 
          tooltip: 'Here are links for Section Two',
          links: [ 
            { label: 'Link One in Section Two', url: fakeUrl, tooltip: 'Some tooltip for Link One in Section Two', type: externalType },
            { label: 'Link Two in Section Two', url: fakeUrl, tooltip: 'Some tooltip for Link Two in Section Two', type: externalType },
            { label: 'Link Three in Section Two', url: fakeUrl, tooltip: 'Some tooltip for Link Three in Section Two', type: externalType },
            { label: 'Link Four in Section Two', url: fakeUrl, tooltip: 'Some tooltip for Link Four in Section Two', type: externalType },
          ] 
        },
        { 
          section: 'Section Three', 
          links: [ 
            { label: 'Link One in Section Three', url: fakeUrl, tooltip: 'Some tooltip for Link One in Section Three', type: externalType },
            { label: 'Link Two in Section Three', url: fakeUrl, tooltip: 'Some tooltip for Link Two in Section Three', type: externalType },
            { label: 'Link Three in Section Three', url: fakeUrl, tooltip: 'Some tooltip for Link Three in Section Three', type: externalType },
            { label: 'Link Four in Section Three', url: fakeUrl, tooltip: 'Some tooltip for Link Four in Section Three', type: externalType },
          ] 
        }
      ]
    };

    // Mock fetch
    global.fetch = jest.fn(() =>
      Promise.resolve({
        ok: true,
        json: () => Promise.resolve(mockData),
      })
    ) as jest.Mock;

    const page = await newSpecPage({
      components: [OdsSelectorWidget],
      html: `<ods-selector-widget project="${project}" service-url="https://api.example.com/platforms/\${project}"></ods-selector-widget>`,
    });
    
    await page.waitForChanges();

    expect(page.root).toEqualHtml(`
      <ods-selector-widget project="PROJECT 1" service-url="https://api.example.com/platforms/\${project}">
        <mock:shadow-root>
          <div class="ods-selector-widget">
            <div class="widget-header">
              <h2>
                PROJECT: PROJECT 1
              </h2>
            </div>
            <div class="widget-content">
              <div class="section">
                <div class="section-header">
                  <h4>
                    Platforms
                  </h4>
                  <div class="info-tooltip">
                    <div>
                      ${infoSvg}
                    </div>
                    <span class="tooltip-text">
                      Select your platform
                    </span>
                  </div>
                </div>
                <div class="platform-icons">
                  <a class="platform-selector" href="https://platform1.com" rel="noopener noreferrer" target="_self">
                    <div class="icon">
                      P1
                    </div>
                    <span class="text">
                      Platform One
                    </span>
                  </a>
                  <div aria-disabled="true" class="disabled platform-selector">
                    <div class="icon">
                      P2
                    </div>
                    <span class="text">
                      Platform Two
                    </span>
                  </div>
                  <div aria-disabled="true" class="disabled platform-selector">
                    <div class="icon">
                      P3
                    </div>
                    <span class="text">
                      Platform Three
                    </span>
                  </div>
                </div>
                <hr>
              </div>
              <div class="section">
                <div class="section-header">
                  <h4>
                    Section One
                  </h4>
                  <div class="info-tooltip">
                    <div>
                      ${infoSvg}
                    </div>
                    <span class="tooltip-text">
                      Here are links for Section One
                    </span>
                  </div>
                </div>
                <ul>
                  <li>
                    <a href="https://www.google.com" rel="noopener noreferrer" target="_blank">
                      <div>  
                        ${arrowSvg}
                      </div>
                      <span>
                        Link One in Section One
                      </span>
                      <span class="tooltip-text">
                        Some tooltip for Link One in Section One
                      </span>
                    </a>
                  </li>
                  <li>
                    <a href="https://www.google.com" rel="noopener noreferrer" target="_blank">
                      <div>  
                        ${arrowSvg}
                      </div>
                      <span>
                        Link Two in Section One
                      </span>
                      <span class="tooltip-text">
                        Some tooltip for Link Two in Section One
                      </span>
                    </a>
                  </li>
                  <li>
                    <a href="https://www.google.com" rel="noopener noreferrer" target="_blank">
                      <div>  
                        ${arrowSvg}
                      </div>
                      <span>
                        Link Three in Section One
                      </span>
                      <span class="tooltip-text">
                        Some tooltip for Link Three in Section One
                      </span>
                    </a>
                  </li>
                  <li>
                    <a href="https://www.google.com" rel="noopener noreferrer" target="_blank">
                      <div>  
                        ${arrowSvg}
                      </div>
                      <span>
                        Link Four in Section One
                      </span>
                      <span class="tooltip-text">
                        Some tooltip for Link Four in Section One
                      </span>
                    </a>
                  </li>
                  <li>
                    <a href="https://www.google.com" rel="noopener noreferrer" target="_blank">
                      <div>  
                        ${squareArrowSvg}
                      </div>
                      <span>
                        Link Five in Section One
                      </span>
                      <span class="tooltip-text">
                        Some tooltip for Link Five in Section One
                      </span>
                    </a>
                  </li>
                  <li>
                    <a href="https://www.google.com" rel="noopener noreferrer" target="_blank">
                      <div>  
                        ${squareArrowSvg}
                      </div>
                      <span>
                        Link Six in Section One
                      </span>
                      <span class="tooltip-text">
                        Some tooltip for Link Six in Section One
                      </span>
                    </a>
                  </li>
                  <li>
                    <a href="https://www.google.com" rel="noopener noreferrer" target="_blank">
                      <div>  
                        ${squareArrowSvg}
                      </div>
                      <span>
                        Link Seven in Section One
                      </span>
                      <span class="tooltip-text">
                        Some tooltip for Link Seven in Section One
                      </span>
                    </a>
                  </li>
                  <li>
                    <a href="https://www.google.com" rel="noopener noreferrer" target="_blank">
                      <div>  
                        ${squareArrowSvg}
                      </div>
                      <span>
                        Link Eight in Section One
                      </span>
                      <span class="tooltip-text">
                        Some tooltip for Link Eight in Section One
                      </span>
                    </a>
                  </li>
                </ul>
                <hr>
              </div>
              <div class="section">
                <div class="section-header">
                  <h4>
                    Section Two
                  </h4>
                  <div class="info-tooltip">
                    <div>
                      ${infoSvg}
                    </div>
                    <span class="tooltip-text">
                      Here are links for Section Two
                    </span>
                  </div>
                </div>
                <ul>
                  <li>
                    <a href="https://www.google.com" rel="noopener noreferrer" target="_blank">
                      <div>  
                        ${squareArrowSvg}
                      </div>
                      <span>
                        Link One in Section Two
                      </span>
                      <span class="tooltip-text">
                        Some tooltip for Link One in Section Two
                      </span>
                    </a>
                  </li>
                  <li>
                    <a href="https://www.google.com" rel="noopener noreferrer" target="_blank">
                      <div>  
                        ${squareArrowSvg}
                      </div>
                      <span>
                        Link Two in Section Two
                      </span>
                      <span class="tooltip-text">
                        Some tooltip for Link Two in Section Two
                      </span>
                    </a>
                  </li>
                  <li>
                    <a href="https://www.google.com" rel="noopener noreferrer" target="_blank">
                      <div>  
                        ${squareArrowSvg}
                      </div>
                      <span>
                        Link Three in Section Two
                      </span>
                      <span class="tooltip-text">
                        Some tooltip for Link Three in Section Two
                      </span>
                    </a>
                  </li>
                  <li>
                    <a href="https://www.google.com" rel="noopener noreferrer" target="_blank">
                      <div>  
                        ${squareArrowSvg}
                      </div>
                      <span>
                        Link Four in Section Two
                      </span>
                      <span class="tooltip-text">
                        Some tooltip for Link Four in Section Two
                      </span>
                    </a>
                  </li>
                </ul>
                <hr>
              </div>
              <div class="section">
                <div class="section-header">
                  <h4>
                    Section Three
                  </h4>
                </div>
                <ul>
                  <li>
                    <a href="https://www.google.com" rel="noopener noreferrer" target="_blank">
                      <div>  
                        ${squareArrowSvg}
                      </div>
                      <span>
                        Link One in Section Three
                      </span>
                      <span class="tooltip-text">
                        Some tooltip for Link One in Section Three
                      </span>
                    </a>
                  </li>
                  <li>
                    <a href="https://www.google.com" rel="noopener noreferrer" target="_blank">
                      <div>  
                        ${squareArrowSvg}
                      </div>
                      <span>
                        Link Two in Section Three
                      </span>
                      <span class="tooltip-text">
                        Some tooltip for Link Two in Section Three
                      </span>
                    </a>
                  </li>
                  <li>
                    <a href="https://www.google.com" rel="noopener noreferrer" target="_blank">
                      <div>  
                        ${squareArrowSvg}
                      </div>
                      <span>
                        Link Three in Section Three
                      </span>
                      <span class="tooltip-text">
                        Some tooltip for Link Three in Section Three
                      </span>
                    </a>
                  </li>
                  <li>
                    <a href="https://www.google.com" rel="noopener noreferrer" target="_blank">
                      <div>  
                        ${squareArrowSvg}
                      </div>
                      <span>
                        Link Four in Section Three
                      </span>
                      <span class="tooltip-text">
                        Some tooltip for Link Four in Section Three
                      </span>
                    </a>
                  </li>
                </ul>
              </div>
          </div>
        </mock:shadow-root>
      </ods-selector-widget>
    `);
  });

  it('should render anchor tags for enabled platforms and div elements for disabled platforms', async () => {
    const mockDataWithDisabled = {
      sections: [
        {
          section: 'Platforms',
          links: [
            { label: 'Platform One', url: 'https://platform1.com', abbreviation: 'P1', type: 'platform' },
            { label: 'Platform Two', url: 'https://platform2.com', abbreviation: 'P2', type: 'platform', disabled: true },
            { label: 'Platform Three', url: 'https://platform3.com', abbreviation: 'P3', type: 'platform', disabled: true }
          ]
        }
      ]
    };

    const mockDataWithoutDisabled = {
      sections: [
        {
          section: 'Platforms',
          links: [
            { label: 'Platform One', url: 'https://platform1.com', abbreviation: 'P1', type: 'platform' },
            { label: 'Platform Two', url: 'https://platform2.com', abbreviation: 'P2', type: 'platform' },
            { label: 'Platform Three', url: 'https://platform3.com', abbreviation: 'P3', type: 'platform' }
          ]
        }
      ]
    };
    
    // Mock fetch for initial render with disabled platforms
    global.fetch = jest.fn(() =>
      Promise.resolve({
        ok: true,
        json: () => Promise.resolve(mockDataWithDisabled),
      })
    ) as jest.Mock;

    const page = await newSpecPage({
      components: [OdsSelectorWidget],
      html: '<ods-selector-widget service-url="https://api.example.com/platforms/${project}"></ods-selector-widget>',
    });
    
    await page.waitForChanges();

    // Test disabled platforms render as div elements
    const platformSelectors = page.root.shadowRoot.querySelectorAll('.platform-selector');
    const platform2Disabled = platformSelectors[1]; // Second platform
    const platform3Disabled = platformSelectors[2]; // Third platform

    expect(platform2Disabled.tagName).toBe('DIV');
    expect(platform2Disabled.classList.contains('disabled')).toBe(true);
    
    expect(platform3Disabled.tagName).toBe('DIV');
    expect(platform3Disabled.classList.contains('disabled')).toBe(true);

    // Enable platforms by mocking new data
    global.fetch = jest.fn(() =>
      Promise.resolve({
        ok: true,
        json: () => Promise.resolve(mockDataWithoutDisabled),
      })
    ) as jest.Mock;

    // Trigger reload by changing serviceUrl
    page.root.serviceUrl = 'https://api.example.com/platforms/${project}?v=2';
    await page.waitForChanges();

    // Test enabled platforms render as anchor elements
    const enabledSelectors = page.root.shadowRoot.querySelectorAll('.platform-selector');
    const platform2Enabled = enabledSelectors[1]; // Second platform
    const platform3Enabled = enabledSelectors[2]; // Third platform

    expect(platform2Enabled.tagName).toBe('A');
    expect(platform2Enabled.classList.contains('disabled')).toBe(false);
    expect(platform2Enabled.hasAttribute('href')).toBe(true);
    
    expect(platform3Enabled.tagName).toBe('A');
    expect(platform3Enabled.classList.contains('disabled')).toBe(false);
    expect(platform3Enabled.hasAttribute('href')).toBe(true);
  });

  it('should display loading state while fetching data', async () => {
    // Mock fetch with a delay
    global.fetch = jest.fn(() =>
      new Promise(resolve => {
        setTimeout(() => {
          resolve({
            ok: true,
            json: () => Promise.resolve({ sections: [] }),
          });
        }, 100);
      })
    ) as jest.Mock;

    const page = await newSpecPage({
      components: [OdsSelectorWidget],
      html: '<ods-selector-widget service-url="https://api.example.com/platforms/${project}"></ods-selector-widget>',
    });

    // Check loading state immediately (before fetch completes)
    expect(page.root.shadowRoot.querySelectorAll('.skeleton').length).toBeGreaterThan(0);
  });

  it('should display error state when fetch fails', async () => {
    // Mock fetch to fail
    global.fetch = jest.fn(() =>
      Promise.resolve({
        ok: false,
        status: 404,
      })
    ) as jest.Mock;

    const page = await newSpecPage({
      components: [OdsSelectorWidget],
      html: '<ods-selector-widget service-url="https://api.example.com/platforms/${project}"></ods-selector-widget>',
    });

    await page.waitForChanges();

    expect(page.root.shadowRoot.textContent).toContain('Something went wrong while loading platforms');
  });

  it('should handle network errors gracefully', async () => {
    // Mock fetch to throw network error
    global.fetch = jest.fn(() =>
      Promise.reject(new Error('Network error'))
    ) as jest.Mock;

    const consoleErrorSpy = jest.spyOn(console, 'error').mockImplementation();

    const page = await newSpecPage({
      components: [OdsSelectorWidget],
      html: '<ods-selector-widget service-url="https://api.example.com/platforms/${project}"></ods-selector-widget>',
    });

    await page.waitForChanges();

    expect(page.root.shadowRoot.textContent).toContain('Something went wrong while loading platforms');
    expect(consoleErrorSpy).toHaveBeenCalledWith('Error fetching platform data:', expect.any(Error));

    consoleErrorSpy.mockRestore();
  });

  it('should not fetch data when serviceUrl is not provided', async () => {
    const fetchSpy = jest.fn();
    global.fetch = fetchSpy;

    const page = await newSpecPage({
      components: [OdsSelectorWidget],
      html: '<ods-selector-widget></ods-selector-widget>',
    });

    await page.waitForChanges();

    expect(fetchSpy).not.toHaveBeenCalled();
    expect(page.root.shadowRoot.textContent).not.toContain('Error:');
    expect(page.root.shadowRoot.textContent).not.toContain('Loading');
  });

  it('should call loadData when Try again button is clicked', async () => {
    // Mock fetch to fail initially
    global.fetch = jest.fn(() =>
      Promise.resolve({
        ok: false,
        status: 500,
      })
    ) as jest.Mock;

    const page = await newSpecPage({
      components: [OdsSelectorWidget],
      html: '<ods-selector-widget service-url="https://api.example.com/platforms/${project}"></ods-selector-widget>',
    });

    await page.waitForChanges();

    // Verify error state is displayed
    expect(page.root.shadowRoot.textContent).toContain('Something went wrong while loading platforms');
    
    // Get the component instance and spy on loadData method
    const component = page.rootInstance;
    const loadDataSpy = jest.spyOn(component, 'loadData');

    // Find and click the Try again button
    const tryAgainButton = page.root.shadowRoot.querySelector('button');
    expect(tryAgainButton).not.toBeNull();
    expect(tryAgainButton.textContent).toBe('Try again');
    
    // Click the button
    tryAgainButton.click();
    
    // Verify loadData was called
    expect(loadDataSpy).toHaveBeenCalled();
    
    loadDataSpy.mockRestore();
  });

  it('should reload data when project prop changes', async () => {
    const mockData1 = { sections: [] };
    const mockData2 = { sections: [] };

    let callCount = 0;
    global.fetch = jest.fn(() => {
      callCount++;
      const data = callCount === 1 ? mockData1 : mockData2;
      return Promise.resolve({
        ok: true,
        json: () => Promise.resolve(data),
      });
    }) as jest.Mock;

    const page = await newSpecPage({
      components: [OdsSelectorWidget],
      html: '<ods-selector-widget project="PROJECT1" service-url="https://api.example.com/platforms/${project}"></ods-selector-widget>',
    });

    await page.waitForChanges();

    // Check first fetch
    expect(global.fetch).toHaveBeenCalledTimes(1);
    expect(global.fetch).toHaveBeenCalledWith('https://api.example.com/platforms/PROJECT1');

    // Change project
    page.root.project = 'PROJECT2';
    await page.waitForChanges();

    // Check second fetch
    expect(global.fetch).toHaveBeenCalledTimes(2);
    expect(global.fetch).toHaveBeenCalledWith('https://api.example.com/platforms/PROJECT2');
  });

  it('should reload data when serviceUrl prop changes', async () => {
    const mockData = { sections: [] };

    global.fetch = jest.fn(() =>
      Promise.resolve({
        ok: true,
        json: () => Promise.resolve(mockData),
      })
    ) as jest.Mock;

    const page = await newSpecPage({
      components: [OdsSelectorWidget],
      html: '<ods-selector-widget service-url="https://api1.example.com/platforms/${project}"></ods-selector-widget>',
    });

    await page.waitForChanges();

    expect(global.fetch).toHaveBeenCalledTimes(1);

    // Change serviceUrl
    page.root.serviceUrl = 'https://api2.example.com/platforms/${project}';
    await page.waitForChanges();

    expect(global.fetch).toHaveBeenCalledTimes(2);
  });

  it('should properly encode project name in URL', async () => {
    const mockData = { sections: [] };

    global.fetch = jest.fn(() =>
      Promise.resolve({
        ok: true,
        json: () => Promise.resolve(mockData),
      })
    ) as jest.Mock;

    const page = await newSpecPage({
      components: [OdsSelectorWidget],
      html: '<ods-selector-widget project="PROJECT WITH SPACES" service-url="https://api.example.com/platforms/${project}"></ods-selector-widget>',
    });

    await page.waitForChanges();

    expect(global.fetch).toHaveBeenCalledWith('https://api.example.com/platforms/PROJECT%20WITH%20SPACES');
  });

  it('should handle response with missing sections gracefully', async () => {
    const mockData = {};

    global.fetch = jest.fn(() =>
      Promise.resolve({
        ok: true,
        json: () => Promise.resolve(mockData),
      })
    ) as jest.Mock;

    const page = await newSpecPage({
      components: [OdsSelectorWidget],
      html: '<ods-selector-widget service-url="https://api.example.com/platforms/${project}"></ods-selector-widget>',
    });

    await page.waitForChanges();

    // Should not crash and should have empty content
    expect(page.root.shadowRoot.querySelector('.section')).toBeNull();
  });

  it('should render platforms without disabled attribute correctly', async () => {
    const mockData = { 
      sections: [
        {
          section: 'Platforms',
          links: [
            { label: 'Platform One', url: 'https://platform1.com', abbreviation: 'P1', type: 'platform' },
            { label: 'Platform Two', url: 'https://platform2.com', abbreviation: 'P2', type: 'platform' }
          ]
        },
        { 
          section: 'Test Section', 
          links: [ 
            { label: 'Test Link', url: 'https://www.google.com', type: 'external' }
          ] 
        }
      ] 
    };

    global.fetch = jest.fn(() =>
      Promise.resolve({
        ok: true,
        json: () => Promise.resolve(mockData),
      })
    ) as jest.Mock;

    const page = await newSpecPage({
      components: [OdsSelectorWidget],
      html: '<ods-selector-widget service-url="https://api.example.com/platforms/${project}"></ods-selector-widget>',
    });

    await page.waitForChanges();

    // Should not crash and platforms should be enabled
    const platformSelectors = page.root.shadowRoot.querySelectorAll('a.platform-selector');
    expect(platformSelectors.length).toBe(2);
    platformSelectors.forEach(platform => {
      expect(platform.classList.contains('disabled')).toBe(false);
    });
  });

  it('should handle JSON parse errors', async () => {
    global.fetch = jest.fn(() =>
      Promise.resolve({
        ok: true,
        json: () => Promise.reject(new Error('Invalid JSON')),
      })
    ) as jest.Mock;

    const consoleErrorSpy = jest.spyOn(console, 'error').mockImplementation();

    const page = await newSpecPage({
      components: [OdsSelectorWidget],
      html: '<ods-selector-widget service-url="https://api.example.com/platforms/${project}"></ods-selector-widget>',
    });

    await page.waitForChanges();

    expect(page.root.shadowRoot.textContent).toContain('Something went wrong while loading platforms');

    consoleErrorSpy.mockRestore();
  });

  it('should handle non-Error exceptions', async () => {
    global.fetch = jest.fn(() =>
      Promise.reject('String error instead of Error object')
    ) as jest.Mock;

    const consoleErrorSpy = jest.spyOn(console, 'error').mockImplementation();

    const page = await newSpecPage({
      components: [OdsSelectorWidget],
      html: '<ods-selector-widget service-url="https://api.example.com/platforms/${project}"></ods-selector-widget>',
    });

    await page.waitForChanges();

    expect(page.root.shadowRoot.textContent).toContain('Something went wrong while loading platforms');

    consoleErrorSpy.mockRestore();
  });

  it('should not display sections when sections array is empty', async () => {
    const mockData = {
      sections: []
    };

    global.fetch = jest.fn(() =>
      Promise.resolve({
        ok: true,
        json: () => Promise.resolve(mockData),
      })
    ) as jest.Mock;

    const page = await newSpecPage({
      components: [OdsSelectorWidget],
      html: '<ods-selector-widget service-url="https://api.example.com/platforms/${project}"></ods-selector-widget>',
    });

    await page.waitForChanges();

    // Should have no sections
    expect(page.root.shadowRoot.querySelector('.section')).toBeNull();
  });

  it('should not display sections when sections is undefined/null', async () => {
    const mockData = {
      // sections is intentionally omitted
    };

    global.fetch = jest.fn(() =>
      Promise.resolve({
        ok: true,
        json: () => Promise.resolve(mockData),
      })
    ) as jest.Mock;

    const page = await newSpecPage({
      components: [OdsSelectorWidget],
      html: '<ods-selector-widget service-url="https://api.example.com/platforms/${project}"></ods-selector-widget>',
    });

    await page.waitForChanges();

    // Should have no sections
    expect(page.root.shadowRoot.querySelector('.section')).toBeNull();
  });

  it('should render platform type links as platform icons', async () => {
    const mockData = {
      sections: [
        {
          section: 'Platforms',
          tooltip: 'Select your platform',
          links: [
            { label: 'Platform One', url: 'https://platform1.com', abbreviation: 'P1', type: 'platform' },
            { label: 'Platform Two', url: 'https://platform2.com', abbreviation: 'P2', type: 'platform', disabled: true }
          ]
        }
      ]
    };

    global.fetch = jest.fn(() =>
      Promise.resolve({
        ok: true,
        json: () => Promise.resolve(mockData),
      })
    ) as jest.Mock;

    const page = await newSpecPage({
      components: [OdsSelectorWidget],
      html: '<ods-selector-widget service-url="https://api.example.com/platforms/${project}"></ods-selector-widget>',
    });

    await page.waitForChanges();

    // Should render platform icons container
    const platformIcons = page.root.shadowRoot.querySelector('.platform-icons');
    expect(platformIcons).toBeTruthy();
    
    // Should have 2 platform selectors
    const selectors = platformIcons.querySelectorAll('.platform-selector');
    expect(selectors.length).toBe(2);
    
    // First should be anchor, second should be div
    expect(selectors[0].tagName).toBe('A');
    expect(selectors[1].tagName).toBe('DIV');
    expect(selectors[1].classList.contains('disabled')).toBe(true);
  });

  it('should render non-platform type links as list items', async () => {
    const mockData = {
      sections: [
        {
          section: 'External Links',
          links: [
            { label: 'Project Link', url: 'https://project.com', type: 'project' },
            { label: 'External Link', url: 'https://external.com', type: 'external' }
          ]
        }
      ]
    };

    global.fetch = jest.fn(() =>
      Promise.resolve({
        ok: true,
        json: () => Promise.resolve(mockData),
      })
    ) as jest.Mock;

    const page = await newSpecPage({
      components: [OdsSelectorWidget],
      html: '<ods-selector-widget service-url="https://api.example.com/platforms/${project}"></ods-selector-widget>',
    });

    await page.waitForChanges();

    // Should render as list
    const ul = page.root.shadowRoot.querySelector('ul');
    expect(ul).toBeTruthy();
    
    const listItems = ul.querySelectorAll('li');
    expect(listItems.length).toBe(2);
    
    // Both should have anchor tags
    listItems.forEach(li => {
      expect(li.querySelector('a')).toBeTruthy();
    });
  });
});
