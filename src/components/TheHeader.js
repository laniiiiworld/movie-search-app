import { Component } from '../core/common';

export default class TheHeader extends Component {
  constructor() {
    super({
      tagName: 'header',
      state: {
        menus: [
          { name: 'Search', href: '#/' },
          { name: 'Movie', href: '#/movie' },
          { name: 'About', href: '#/about' },
        ],
      },
    });

    window.addEventListener('popstate', () => this.render());
  }

  render() {
    this.el.classList.add('header');
    this.el.innerHTML = /* html */ `
      <a href="#/" class="logo">
        <span>OMDbAPI</span>.COM
      </a>
      <nav>
        <ul>
          ${this.state.menus
            .map((menu) => {
              const hash = location.hash.split('?')[0];
              const href = menu.href.split('?')[0];
              const isActive = hash === href;
              return /* html */ `
                <li>
                  <a href="${menu.href}" 
                    class="${isActive ? 'active' : ''}">
                    ${menu.name}
                  </a>
                </li>
              `;
            })
            .join('')}
        </ul>
      </nav>
      <a class="github" href="${process.env.GITHUB_URL}"><i class="fa-brands fa-github"></i></a>
    `;
  }
}
