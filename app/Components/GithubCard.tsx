import React from 'react';
import styled from 'styled-components';

const GithubCard = () => {
  return (
    <StyledWrapper>
      <div>
        <svg style={{position: 'absolute', width: 0, height: 0}}>
          <filter id="unopaq" y="-100%" height="300%" x="-100%" width="300%">
            <feColorMatrix values="1 0 0 0 0
            0 1 0 0 0
            0 0 1 0 0
            0 0 0 5 0" />
          </filter>
          <filter id="unopaq2" y="-100%" height="300%" x="-100%" width="300%">
            <feColorMatrix values="1 0 0 0 0
            0 1 0 0 0
            0 0 1 0 0
            0 0 0 10 0" />
          </filter>
          <filter id="unopaq3" y="-100%" height="300%" x="-100%" width="300%">
            <feColorMatrix values="1 0 0 1 0
            0 1 0 1 0
            0 0 1 1 0
            0 0 0 2 0" />
          </filter>
        </svg>
        <div className="card-container">
          <div className="border-animation" />
          <div className="spin-blur" />
          <div className="spin-intense" />
          <div className="spin-inside" />
          <div className="card">
            <div className="header">
              <div className="top-header">
                <div className="icon">
                  <svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1 2.75A.75.75 0 0 1 1.75 2h12.5a.75.75 0 0 1 0 1.5H1.75A.75.75 0 0 1 1 2.75Zm0 5A.75.75 0 0 1 1.75 7h12.5a.75.75 0 0 1 0 1.5H1.75A.75.75 0 0 1 1 7.75ZM1.75 12h12.5a.75.75 0 0 1 0 1.5H1.75a.75.75 0 0 1 0-1.5Z" />
                  </svg>
                </div>
                <a className="gh-icon" href="#">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <path d="M12,2A10,10 0 0,0 2,12C2,16.42 4.87,20.17 8.84,21.5C9.34,21.58 9.5,21.27 9.5,21C9.5,20.77 9.5,20.14 9.5,19.31C6.73,19.91 6.14,17.97 6.14,17.97C5.68,16.81 5.03,16.5 5.03,16.5C4.12,15.88 5.1,15.9 5.1,15.9C6.1,15.97 6.63,16.93 6.63,16.93C7.5,18.45 8.97,18 9.54,17.76C9.63,17.11 9.89,16.67 10.17,16.42C7.95,16.17 5.62,15.31 5.62,11.5C5.62,10.39 6,9.5 6.65,8.79C6.55,8.54 6.2,7.5 6.75,6.15C6.75,6.15 7.59,5.88 9.5,7.17C10.29,6.95 11.15,6.84 12,6.84C12.85,6.84 13.71,6.95 14.5,7.17C16.41,5.88 17.25,6.15 17.25,6.15C17.8,7.5 17.45,8.54 17.35,8.79C18,9.5 18.38,10.39 18.38,11.5C18.38,15.32 16.04,16.16 13.81,16.41C14.17,16.72 14.5,17.33 14.5,18.26C14.5,19.6 14.5,20.68 14.5,21C14.5,21.27 14.66,21.59 15.17,21.5C19.14,20.16 22,16.42 22,12A10,10 0 0,0 12,2Z" />
                  </svg>
                </a>
                <div className="repo">
                  <a className="repo-owner" href="#">sai</a>
                  <span className="repo-slash">/</span>
                  <a className="repo-name" href="#">about-me</a>
                </div>
                <div className="space" />
                <div className="icon">
                  <svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1.5 3.25a2.25 2.25 0 1 1 3 2.122v5.256a2.251 2.251 0 1 1-1.5 0V5.372A2.25 2.25 0 0 1 1.5 3.25Zm5.677-.177L9.573.677A.25.25 0 0 1 10 .854V2.5h1A2.5 2.5 0 0 1 13.5 5v5.628a2.251 2.251 0 1 1-1.5 0V5a1 1 0 0 0-1-1h-1v1.646a.25.25 0 0 1-.427.177L7.177 3.427a.25.25 0 0 1 0-.354ZM3.75 2.5a.75.75 0 1 0 0 1.5.75.75 0 0 0 0-1.5Zm0 9.5a.75.75 0 1 0 0 1.5.75.75 0 0 0 0-1.5Zm8.25.75a.75.75 0 1 0 1.5 0 .75.75 0 0 0-1.5 0Z" />
                  </svg>
                </div>
                <div className="icon">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
                    <path d="M2.8 2.06A1.75 1.75 0 0 1 4.41 1h7.18c.7 0 1.333.417 1.61 1.06l2.74 6.395c.04.093.06.194.06.295v4.5A1.75 1.75 0 0 1 14.25 15H1.75A1.75 1.75 0 0 1 0 13.25v-4.5c0-.101.02-.202.06-.295Zm1.61.44a.25.25 0 0 0-.23.152L1.887 8H4.75a.75.75 0 0 1 .6.3L6.625 10h2.75l1.275-1.7a.75.75 0 0 1 .6-.3h2.863L11.82 2.652a.25.25 0 0 0-.23-.152Zm10.09 7h-2.875l-1.275 1.7a.75.75 0 0 1-.6.3h-3.5a.75.75 0 0 1-.6-.3L4.375 9.5H1.5v3.75c0 .138.112.25.25.25h12.5a.25.25 0 0 0 .25-.25Z" />
                  </svg>
                </div>
                <div className="pfp" />
              </div>
              <div className="btm-header">
                <div className="tab">
                  <div className="tab-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
                      <path d="m11.28 3.22 4.25 4.25a.75.75 0 0 1 0 1.06l-4.25 4.25a.749.749 0 0 1-1.275-.326.749.749 0 0 1 .215-.734L13.94 8l-3.72-3.72a.749.749 0 0 1 .326-1.275.749.749 0 0 1 .734.215Zm-6.56 0a.751.751 0 0 1 1.042.018.751.751 0 0 1 .018 1.042L2.06 8l3.72 3.72a.749.749 0 0 1-.326 1.275.749.749 0 0 1-.734-.215L.47 8.53a.75.75 0 0 1 0-1.06Z" />
                    </svg>
                  </div>
                  <div className="tab-text">Code</div>
                </div>
                <div className="tab">
                  <div className="tab-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
                      <path d="M8 9.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z" />
                      <path d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0ZM1.5 8a6.5 6.5 0 1 0 13 0 6.5 6.5 0 0 0-13 0Z" />
                    </svg>
                  </div>
                  <div className="tab-text">Issues</div>
                </div>
                <div className="tab active">
                  <div className="tab-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
                      <path d="M1.5 3.25a2.25 2.25 0 1 1 3 2.122v5.256a2.251 2.251 0 1 1-1.5 0V5.372A2.25 2.25 0 0 1 1.5 3.25Zm5.677-.177L9.573.677A.25.25 0 0 1 10 .854V2.5h1A2.5 2.5 0 0 1 13.5 5v5.628a2.251 2.251 0 1 1-1.5 0V5a1 1 0 0 0-1-1h-1v1.646a.25.25 0 0 1-.427.177L7.177 3.427a.25.25 0 0 1 0-.354ZM3.75 2.5a.75.75 0 1 0 0 1.5.75.75 0 0 0 0-1.5Zm0 9.5a.75.75 0 1 0 0 1.5.75.75 0 0 0 0-1.5Zm8.25.75a.75.75 0 1 0 1.5 0 .75.75 0 0 0-1.5 0Z" />
                    </svg>
                  </div>
                  <div className="tab-text">Pull Requests</div>
                </div>
              </div>
            </div>
            <div className="content">
              <div className="prs">
                <div className="pr">
                  <label>
                    <input type="checkbox" />
                    <div className="checkbox" />
                  </label>
                  <div className="pr-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
                      <path d="M1.5 3.25a2.25 2.25 0 1 1 3 2.122v5.256a2.251 2.251 0 1 1-1.5 0V5.372A2.25 2.25 0 0 1 1.5 3.25Zm5.677-.177L9.573.677A.25.25 0 0 1 10 .854V2.5h1A2.5 2.5 0 0 1 13.5 5v5.628a2.251 2.251 0 1 1-1.5 0V5a1 1 0 0 0-1-1h-1v1.646a.25.25 0 0 1-.427.177L7.177 3.427a.25.25 0 0 1 0-.354ZM3.75 2.5a.75.75 0 1 0 0 1.5.75.75 0 0 0 0-1.5Zm0 9.5a.75.75 0 1 0 0 1.5.75.75 0 0 0 0-1.5Zm8.25.75a.75.75 0 1 0 1.5 0 .75.75 0 0 0-1.5 0Z" />
                    </svg>
                  </div>
                  <div className="pr-text">
                    <div className="pr-title"> [Feature] Designed + shipped features under tight deadlines without breaking a sweat</div>
                    <div className="pr-desc">#1338 opened 1 minute ago by sai</div>
                  </div>
                </div>
                <div className="pr">
                  <label>
                    <input type="checkbox" />
                    <div className="checkbox" />
                  </label>
                  <div className="pr-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
                      <path d="M1.5 3.25a2.25 2.25 0 1 1 3 2.122v5.256a2.251 2.251 0 1 1-1.5 0V5.372A2.25 2.25 0 0 1 1.5 3.25Zm5.677-.177L9.573.677A.25.25 0 0 1 10 .854V2.5h1A2.5 2.5 0 0 1 13.5 5v5.628a2.251 2.251 0 1 1-1.5 0V5a1 1 0 0 0-1-1h-1v1.646a.25.25 0 0 1-.427.177L7.177 3.427a.25.25 0 0 1 0-.354ZM3.75 2.5a.75.75 0 1 0 0 1.5.75.75 0 0 0 0-1.5Zm0 9.5a.75.75 0 1 0 0 1.5.75.75 0 0 0 0-1.5Zm8.25.75a.75.75 0 1 0 1.5 0 .75.75 0 0 0-1.5 0Z" />
                    </svg>
                  </div>
                  <div className="pr-text">
                    <div className="pr-title">[Chore] Refactored ego out of the codebase — embraced team feedback fully</div>
                    <div className="pr-desc">#5182 opened 4 minutes ago by sai</div>
                  </div>
                </div>
                <div className="pr">
                  <label>
                    <input type="checkbox" />
                    <div className="checkbox" />
                  </label>
                  <div className="pr-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
                      <path d="M1.5 3.25a2.25 2.25 0 1 1 3 2.122v5.256a2.251 2.251 0 1 1-1.5 0V5.372A2.25 2.25 0 0 1 1.5 3.25Zm5.677-.177L9.573.677A.25.25 0 0 1 10 .854V2.5h1A2.5 2.5 0 0 1 13.5 5v5.628a2.251 2.251 0 1 1-1.5 0V5a1 1 0 0 0-1-1h-1v1.646a.25.25 0 0 1-.427.177L7.177 3.427a.25.25 0 0 1 0-.354ZM3.75 2.5a.75.75 0 1 0 0 1.5.75.75 0 0 0 0-1.5Zm0 9.5a.75.75 0 1 0 0 1.5.75.75 0 0 0 0-1.5Zm8.25.75a.75.75 0 1 0 1.5 0 .75.75 0 0 0-1.5 0Z" />
                    </svg>
                  </div>
                  <div className="pr-text">
                    <div className="pr-title">[UX] Championed the user journey from onboarding to "wow!" moments</div>
                    <div className="pr-desc">#4444 opened 6 minutes ago by sai</div>
                  </div>
                </div>
                <div className="pr">
                  <label>
                    <input type="checkbox" />
                    <div className="checkbox" />
                  </label>
                  <div className="pr-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
                      <path d="M1.5 3.25a2.25 2.25 0 1 1 3 2.122v5.256a2.251 2.251 0 1 1-1.5 0V5.372A2.25 2.25 0 0 1 1.5 3.25Zm5.677-.177L9.573.677A.25.25 0 0 1 10 .854V2.5h1A2.5 2.5 0 0 1 13.5 5v5.628a2.251 2.251 0 1 1-1.5 0V5a1 1 0 0 0-1-1h-1v1.646a.25.25 0 0 1-.427.177L7.177 3.427a.25.25 0 0 1 0-.354ZM3.75 2.5a.75.75 0 1 0 0 1.5.75.75 0 0 0 0-1.5Zm0 9.5a.75.75 0 1 0 0 1.5.75.75 0 0 0 0-1.5Zm8.25.75a.75.75 0 1 0 1.5 0 .75.75 0 0 0-1.5 0Z" />
                    </svg>
                  </div>
                  <div className="pr-text">
                    <div className="pr-title"> [Experiment] Stepped way outside my comfort zone and loved the chaos</div>
                    <div className="pr-desc">#1123 opened 10 minutes ago by sai</div>
                  </div>
                </div>
                <div className="pr">
                  <label>
                    <input type="checkbox" />
                    <div className="checkbox" />
                  </label>
                  <div className="pr-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
                      <path d="M1.5 3.25a2.25 2.25 0 1 1 3 2.122v5.256a2.251 2.251 0 1 1-1.5 0V5.372A2.25 2.25 0 0 1 1.5 3.25Zm5.677-.177L9.573.677A.25.25 0 0 1 10 .854V2.5h1A2.5 2.5 0 0 1 13.5 5v5.628a2.251 2.251 0 1 1-1.5 0V5a1 1 0 0 0-1-1h-1v1.646a.25.25 0 0 1-.427.177L7.177 3.427a.25.25 0 0 1 0-.354ZM3.75 2.5a.75.75 0 1 0 0 1.5.75.75 0 0 0 0-1.5Zm0 9.5a.75.75 0 1 0 0 1.5.75.75 0 0 0 0-1.5Zm8.25.75a.75.75 0 1 0 1.5 0 .75.75 0 0 0-1.5 0Z" />
                    </svg>
                  </div>
                  <div className="pr-text">
                    <div className="pr-title">[Design] Sketched wireframes on paper, napkins, and whiteboards — shipped them all</div>
                    <div className="pr-desc">#007 opened 2 days ago by sai</div>
                  </div>
                </div>
                <div className="pr">
                  <label>
                    <input type="checkbox" />
                    <div className="checkbox" />
                  </label>
                  <div className="pr-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
                      <path d="M1.5 3.25a2.25 2.25 0 1 1 3 2.122v5.256a2.251 2.251 0 1 1-1.5 0V5.372A2.25 2.25 0 0 1 1.5 3.25Zm5.677-.177L9.573.677A.25.25 0 0 1 10 .854V2.5h1A2.5 2.5 0 0 1 13.5 5v5.628a2.251 2.251 0 1 1-1.5 0V5a1 1 0 0 0-1-1h-1v1.646a.25.25 0 0 1-.427.177L7.177 3.427a.25.25 0 0 1 0-.354ZM3.75 2.5a.75.75 0 1 0 0 1.5.75.75 0 0 0 0-1.5Zm0 9.5a.75.75 0 1 0 0 1.5.75.75 0 0 0 0-1.5Zm8.25.75a.75.75 0 1 0 1.5 0 .75.75 0 0 0-1.5 0Z" />
                    </svg>
                  </div>
                  <div className="pr-text">
                    <div className="pr-title">[Feature] Delivered MVP before the coffee cooled</div>
                    <div className="pr-desc">#999 opened 1 week ago by sai</div>
                  </div>
                </div>
                <div className="pr">
                  <label>
                    <input type="checkbox" />
                    <div className="checkbox" />
                  </label>
                  <div className="pr-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
                      <path d="M1.5 3.25a2.25 2.25 0 1 1 3 2.122v5.256a2.251 2.251 0 1 1-1.5 0V5.372A2.25 2.25 0 0 1 1.5 3.25Zm5.677-.177L9.573.677A.25.25 0 0 1 10 .854V2.5h1A2.5 2.5 0 0 1 13.5 5v5.628a2.251 2.251 0 1 1-1.5 0V5a1 1 0 0 0-1-1h-1v1.646a.25.25 0 0 1-.427.177L7.177 3.427a.25.25 0 0 1 0-.354ZM3.75 2.5a.75.75 0 1 0 0 1.5.75.75 0 0 0 0-1.5Zm0 9.5a.75.75 0 1 0 0 1.5.75.75 0 0 0 0-1.5Zm8.25.75a.75.75 0 1 0 1.5 0 .75.75 0 0 0-1.5 0Z" />
                    </svg>
                  </div>
                  <div className="pr-text">
                    <div className="pr-title">[Experiment] Tackled a domain I knew nothing about — deployed anyway</div>
                    <div className="pr-desc">#9999 opened 2 months ago by sai</div>
                  </div>
                </div>
                <div className="pr">
                  <label>
                    <input type="checkbox" />
                    <div className="checkbox" />
                  </label>
                  <div className="pr-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
                      <path d="M1.5 3.25a2.25 2.25 0 1 1 3 2.122v5.256a2.251 2.251 0 1 1-1.5 0V5.372A2.25 2.25 0 0 1 1.5 3.25Zm5.677-.177L9.573.677A.25.25 0 0 1 10 .854V2.5h1A2.5 2.5 0 0 1 13.5 5v5.628a2.251 2.251 0 1 1-1.5 0V5a1 1 0 0 0-1-1h-1v1.646a.25.25 0 0 1-.427.177L7.177 3.427a.25.25 0 0 1 0-.354ZM3.75 2.5a.75.75 0 1 0 0 1.5.75.75 0 0 0 0-1.5Zm0 9.5a.75.75 0 1 0 0 1.5.75.75 0 0 0 0-1.5Zm8.25.75a.75.75 0 1 0 1.5 0 .75.75 0 0 0-1.5 0Z" />
                    </svg>
                  </div>
                  <div className="pr-text">
                    <div className="pr-title">[Docs] Added notes on how to survive Vancouver rain & debug life</div>
                    <div className="pr-desc">#707 opened 3 months ago by sai</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  .card-container {
    position: relative;
    width: 450px;
    height: 400px;
    border-radius: 1em;
    margin: 0 2em;
    overflow: hidden;
  }

  .card {
    position: absolute;
    inset: 2px;
    border-radius: 0.875em;
    background: #111215;
    display: flex;
    flex-direction: column;
    color: #fff;
    overflow: hidden;
    z-index: 2;
  }

  .border-animation {
    position: absolute;
    inset: 0;
    border-radius: inherit;
    padding: 1px;
    background: linear-gradient(45deg,
      transparent 40%,
      rgba(255, 255, 255, 0.8),
      transparent 60%
    );
    animation: rotate 30s linear infinite;
    z-index: 1;
  }

  @keyframes rotate {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }

  .header {
    background: #0b0d10;
    display: flex;
    flex-direction: column;
    gap: 4px;
    border-bottom: 1px solid #1d1f23;
  }

  .top-header {
    background: #0b0d10;
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 8px;
    padding: 0 12px;
    padding-top: 10px;
  }

  :where(.repo > a, .repo > span) {
    text-decoration: none;
    color: #bebebe;
    font-weight: 300;
    font-size: 14px;
  }

  .repo {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 8px;
  }

  .repo-slash {
    font-size: 10px;
    pointer-events: none;
  }

  .repo-name {
    color: #fff;
    font-weight: 400;
  }

  .repo > a {
    position: relative;
  }

  .repo > a::before {
    content: "";
    position: absolute;
    inset: -2px -4px;
    border-radius: 6px;
    background: hsl(0 0 100 / 7%);
    opacity: 0;
    transition: 0.3s;
  }

  .repo > a:hover::before {
    opacity: 1;
  }

  .gh-icon,
  .gh-icon svg {
    height: 2em;
    fill: #fff;
  }

  .space {
    flex-grow: 1;
  }

  .icon {
    cursor: pointer;
    display: flex;
    height: 1.5em;
    width: 1.5em;
    padding: 0.25em;
    border-radius: 0.25em;
    fill: #797d86;
    outline: 1px solid #303236;
    transition: 0.3s;
  }

  .icon:hover {
    background: hsl(0 0 100 / 7%);
  }

  .icon svg {
    width: 1em;
    height: 1em;
  }

  .btm-header {
    display: flex;
    flex-direction: row;
    padding: 0px 10px;
    gap: 8px;
    color: #fff;
    fill: #fff;
  }

  .tab {
    position: relative;
    padding: 4px 8px;
    padding-bottom: 12px;
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 6px;
    font-size: 14px;
    cursor: pointer;
    isolation: isolate;
  }

  .tab-icon {
    width: 16px;
    height: 16px;
    display: flex;
    align-items: center;
    justify-content: center;
    fill: #797d86;
  }

  .tab-icon svg {
    width: 16px;
    height: 16px;
  }

  .tab-text {
    line-height: 16px;
  }

  .tab.active {
    border-bottom: 2px solid #e98463;
  }

  .tab.active .tab-icon {
    fill: #fff;
  }

  .tab::before {
    content: "";
    position: absolute;
    background: #fff;
    border-radius: 8px;
    opacity: 0;
    inset: 0;
    bottom: 8px;
    z-index: -1;
    transition: 0.3s;
  }

  .tab:hover::before {
    opacity: 0.07;
  }

  .content {
    height: 100%;
    overflow: hidden;
  }

  .prs::-webkit-scrollbar {
    width: 0;
  }

  .prs {
    margin: 12px;
    height: calc(100% - 24px);
    display: flex;
    flex-direction: column;
    gap: 1px;
    border: 1px solid #343539;
    border-radius: 6px;
    overflow: auto;
  }

  .pr {
    display: flex;
    flex-direction: row;
    gap: 8px;
    width: 100%;
    outline: 1px solid #343539;
    padding: 8px;
  }

  .checkbox {
    position: relative;
    width: 1em;
    height: 1em;
    border-radius: 2px;
    outline: 1px solid #343539;
    transition: 0.3s;
  }

  .checkbox:hover {
    background: hsl(0 0 100 / 5%);
  }

  .checkbox:active {
    outline-color: #2a2c2f;
    background: hsl(0 0 100 / 0%);
  }

  .card input:checked ~ .checkbox {
    outline-color: #797d86;
  }

  .card input:checked ~ .checkbox:active {
    outline-color: #56585c;
  }

  .card input:checked ~ .checkbox::before {
    content: "";
    position: absolute;
    pointer-events: none;
    width: 4px;
    height: 8px;
    border-bottom: 2px solid;
    border-right: 2px solid;
    border-color: #fff;
    transform: translate(5.5px, 2.5px) rotate(45deg);
  }

  .pr-icon {
    display: flex;
    width: 1em;
    height: 1em;
    fill: #63d188;
  }

  .pr-text {
    display: flex;
    flex-direction: column;
  }

  .pr-title {
    font-size: 12px;
    font-weight: 600;
    cursor: pointer;
  }

  .pr-title:hover {
    color: #4493f8;
  }

  .pr-desc {
    padding-left: 2px;
    font-size: 10px;
    color: #797d86;
  }

  .backdrop {
    position: absolute;
    inset: -100%;
    background: transparent;
    z-index: -1;
  }

  .spin {
    position: absolute;
    inset: 0;
    z-index: -2;
    overflow: hidden;
  }

  .spin-blur {
    filter: blur(3em) url(#unopaq);
  }

  .spin-intense {
    inset: -0.125em;
    filter: blur(0.5em) url(#unopaq2);
    border-radius: 0.75em;
  }

  .spin-inside {
    inset: -2px;
    border-radius: inherit;
    filter: blur(2px) url(#unopaq3);
    z-index: 0;
  }

  .spin::before {
    content: "";
    position: absolute;
    inset: -30%;
    animation: speen 4s cubic-bezier(0.4, 0, 0.2, 1) infinite;
  }

  .spin-blur::before {
    background: linear-gradient(-45deg, transparent, rgba(255,255,255,0.1) 46% 54%, transparent);
  }

  .spin-intense::before {
    background: linear-gradient(-45deg, transparent, rgba(255,255,255,0.15) 35% 65%, transparent);
  }

  .spin-inside::before {
    background: linear-gradient(-45deg, transparent, rgba(255,255,255,0.1) 35% 65%, transparent);
  }

  @keyframes speen {
    0% {
      rotate: 0deg;
    }
    100% {
      rotate: 360deg;
    }
  }

  .card input {
    display: none;
  }

  .pfp {
    cursor: pointer;
    display: flex;
    width: 1.75em;
    height: 1.75em;
    border-radius: 100%;
    background-color: #fff1;
    background-size: cover;
    background-image: url("/githubprofile.png");
  }
`;

export default GithubCard;
