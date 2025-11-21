import { Component, Prop, State, Watch, h } from '@stencil/core';

interface PlatformData {
  sections: PlatformSection[];
}

interface PlatformSection {
  section: string;
  tooltip: string;
  links: PlatformLink[];
}

interface PlatformLink { 
  label: string; 
  url: string, 
  tooltip?: string, 
  type: string, 
  disabled?: boolean, 
  abbreviation?: string 
}

@Component({
  tag: 'ods-selector-widget',
  styleUrl: 'ods-selector-widget.css',
  shadow: true,
})
export class OdsSelectorWidget {

  /**
   * The project name displayed in the widget header.
   * @type {string}
   * @memberof OdsSelectorWidget
   * @example
   * project = 'PROJECT 1'; 
   */
  @Prop() project: string = 'PROJECT 1';

  /**
   * The service URL to fetch platform data from.
   * Use ${project} as a placeholder that will be replaced with the project name.
   * @type {string}
   * @memberof OdsSelectorWidget
   * @example
   * serviceUrl = 'https://api.example.com/platforms/${project}';
   */
  @Prop() serviceUrl: string;

  /**
   * Internal state to store sections fetched from the service.
   * @type {PlatformSection[]}
   * @memberof OdsSelectorWidget
   */
  @State() sections: PlatformSection[] = [];

  /**
   * Internal state to track loading status.
   * @type {boolean}
   * @memberof OdsSelectorWidget
   */
  @State() isLoading: boolean = false;

  /**
   * Internal state to track error status.
   * @type {string | null}
   * @memberof OdsSelectorWidget
   */
  @State() error: string | null = null;

  /**
   * Watch for changes in the project prop and reload data.
   */
  @Watch('project')
  @Watch('serviceUrl')
  handlePropsChange() {
    this.loadData();
  }

  /**
   * Component lifecycle: called when component is loaded.
   */
  componentWillLoad() {
    this.loadData();
  }

  /**
   * Fetch platform data from the service URL.
   */
  async loadData() {
    if (!this.serviceUrl) {
      this.error = null;
      return;
    }
    this.isLoading = true;
    this.error = null;

    try {
      const url = this.serviceUrl.replace('${project}', encodeURIComponent(this.project));

      const response = await fetch(url);

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data: PlatformData = await response.json();
      this.sections = data.sections || [];
      this.error = null;
    } catch (err) {
      console.error('Error fetching platform data:', err);
      this.error = err instanceof Error ? err.message : 'Failed to load platform data';
      this.sections = [];
    } finally {
      this.isLoading = false;
    }
  }

  render() {
    const arrowSvg = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="17" viewBox="0 0 16 17" fill="none"><path fill-rule="evenodd" clip-rule="evenodd" d="M13.0666 7.71332L8.43596 3.20065L8.89729 2.71332L13.3333 6.97998V9.11332L8.89729 13.38L8.43596 12.8926L13.0666 8.37998H2.66663V7.71332H13.0666Z" fill="#191919" /></svg>`;
    const squareArrowSvg = `<?xml version="1.0" encoding="UTF-8"?><svg id="Canvas" xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 24 24"><path d="M20.9985977,4.9995999l-1.9966812-1.9995999h-4.9903059v.9998h5.288516l-7.6509237,7.6434295.7093315.7098799,7.6409311-7.6434903.0021935,5.288981h.9983406l-.0014019-4.9990001ZM17.9741436,18.4741383c0,.8269825-.700983,1.526062-1.5316353,1.526062l-10.9466553-.0019531c-.8257766,0-1.4975119-.6727161-1.4975119-1.4997005V7.5427313c0-.8323531.6853848-1.5358257,1.4975119-1.5358257l5.5298748.0009766v-.9998002l-5.5298743-.0009766c-1.3766189,0-2.4958532,1.1374679-2.4958532,2.5356255v10.9558158c0,1.3786297,1.1192343,2.4995003,2.4958532,2.4995003l10.9466548.0019531c1.3717442,0,2.5299759-1.1569958,2.5299759-2.5229321l.0341225-5.4949942-.9983406-.0058584-.0341225,5.4979229Z"/></svg>`;
    const infoSvg = `<?xml version="1.0" encoding="UTF-8"?><svg id="Icons" xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 24 24"><path d="M12.0000916,2.9999924c4.962616,0,9,4.0373764,9,9s-4.037384,9-9,9S3.0000916,16.962616,3.0000916,11.9999924,7.0374756,2.9999924,12.0000916,2.9999924M12.0000916,1.9999924C6.4772491,1.9999924,2.0000916,6.47715,2.0000916,11.9999924c0,5.52285,4.4771576,10,10,10s10-4.47715,10-10c0-5.5228424-4.4771576-10-10-10h0ZM12.5,6.5h-1v2h1v-2ZM12.5,10.5h-1v7h1v-7Z"/></svg>`;

    // Show loading state
    if (this.isLoading) {
      return (
        <div class="ods-selector-widget skeleton">
          <div class="widget-header skeleton-header">
          </div>
            <div class="widget-content">
            <div class="skeleton-title"></div>

            <div class="platform-icons">
              {['platform-1', 'platform-2', 'platform-3', 'platform-4'].map((platform) => (
              <div class="platform-selector skeleton" key={platform}>
                <div class="icon skeleton-circle"></div>
                <div class="skeleton-text"></div>
              </div>
              ))}
            </div>

            {[
              { id: 'section-1', linkCount: 10 },
              { id: 'section-2', linkCount: 8 },
              { id: 'section-3', linkCount: 4 }
            ].map((section) => (
              <div key={section.id}>
              <hr />
              <div class="section">
              <div class="skeleton-section-title"></div>
              <ul>
              {Array.from({ length: section.linkCount }, (_, i) => `link-${i + 1}`).map((linkId) => (
                <li key={`${section.id}-${linkId}`}>
                <div class="skeleton-link"></div>
                </li>
              ))}
              </ul>
              </div>
              </div>
            ))}
            </div>
        </div>
      );
    }

    // Show error state
    if (this.error) {
      return (
        <div class="ods-selector-widget">
          <div class="widget-header">
            <h2>PROJECT: {this.project}</h2>
          </div>
          <div class="widget-content">
            <div class="error-section">
              <span>Something went wrong while loading platforms.</span>
              <button onClick={() => this.loadData()}>Try again</button>
            </div>
          </div>
        </div>
      );
    }

    return (
      <div class="ods-selector-widget">
        <div class="widget-header">
          <h2>PROJECT: {this.project}</h2>
        </div>
        <div class="widget-content">

          {this.sections.map((section, idx) => (
            <div class="section" key={section.section}>
              <div class="section-header">
                <h4>{section.section}</h4>
                {section.tooltip && section.tooltip.trim() !== '' && (
                  <div class="info-tooltip">
                    <div innerHTML={infoSvg}></div>
                    <span class="tooltip-text">
                      {section.tooltip}
                    </span>
                  </div>
                )}
              </div>
              {section.links.every(link => link.type === 'platform') ? (
                <div class="platform-icons">
                  {section.links.map(link => (
                      link.disabled ? (
                        <div class="platform-selector disabled" aria-disabled="true">
                          <div class="icon">{link.abbreviation}</div>
                          <span class="text">{link.label}</span>
                        </div>
                      ) : (
                        <a
                          class="platform-selector"
                          href={link.url}
                          target="_self"
                          rel="noopener noreferrer"
                        >
                          <div class="icon">{link.abbreviation}</div>
                          <span class="text">{link.label}</span>
                        </a>
                      )
                  ))}
                </div>
              ) : (
              <ul>
                {section.links.map(link => (
                  <li key={link.url}>
                    <a 
                      href={link.url} 
                      target="_blank" 
                      rel="noopener noreferrer"
                    >
                      <div innerHTML={link.type == "project" ? arrowSvg : squareArrowSvg}></div>
                      <span>{link.label}</span>
                      {link.tooltip && link.tooltip.trim() !== '' && (
                        <span class="tooltip-text">
                          {link.tooltip}
                        </span>
                      )}
                    </a>
                  </li>
                ))}
              </ul>
              )}
              {idx < this.sections.length - 1 && <hr />}
            </div>
          ))}
        </div>
      </div>
    );
  }

}