import { Component } from '@angular/core';
import { BlogCard } from './blog.interface';

@Component({
  selector: 'app-blog',
  standalone: true,
  imports: [],
  templateUrl: './blog.component.html',
  styleUrl: './blog.component.scss'
})

export class BlogComponent {
  activeIndex: number = 0;
  indexMin: number = 0;
  cardGroups: BlogCard[][] = [
    [
      {
        title: "Tout savoir sur le pourquoi du comment avec qui. 1",
        text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam ipsum placeat quisquam sequi culpa, debitis.",
        cta: {
          href: "/lorem",
          ariaLabel: "Lorem"
        }
      },
      {
        title: "Tout savoir sur le pourquoi du comment avec qui. 1 Tout savoir sur le pourquoi du comment avec qui. 1",
        text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
        cta: {
          href: "/lorem",
          ariaLabel: "Lorem"
        }
      },
      {
        title: "Tout savoir sur le pourquoi du comment. 1",
        text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam ipsum placeat quisquam sequi culpa, debitis. Magnam ipsum placeat quisquam.",
        cta: {
          href: "/lorem",
          ariaLabel: "Lorem"
        }
      }
    ],
    [
      {
        title: "Tout savoir sur le pourquoi du comment avec qui. 2",
        text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam ipsum placeat quisquam sequi culpa, debitis.",
        cta: {
          href: "/lorem",
          ariaLabel: "Lorem"
        }
      },
      {
        title: "Tout savoir sur le pourquoi. 2",
        text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
        cta: {
          href: "/lorem",
          ariaLabel: "Lorem"
        }
      },
      {
        title: "Tout savoir sur le pourquoi du comment. 2",
        text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam ipsum placeat quisquam sequi culpa, debitis. Magnam ipsum placeat quisquam.",
        cta: {
          href: "/lorem",
          ariaLabel: "Lorem"
        }
      }
    ],
    [
      {
        title: "Tout savoir sur le pourquoi du comment avec qui. 3",
        text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam ipsum placeat quisquam sequi culpa, debitis.",
        cta: {
          href: "/lorem",
          ariaLabel: "Lorem"
        }
      },
      {
        title: "Tout savoir sur le pourquoi. 3",
        text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
        cta: {
          href: "/lorem",
          ariaLabel: "Lorem"
        }
      },
      {
        title: "Tout savoir sur le pourquoi du comment. 3",
        text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam ipsum placeat quisquam sequi culpa, debitis. Magnam ipsum placeat quisquam.",
        cta: {
          href: "/lorem",
          ariaLabel: "Lorem"
        }
      }
    ],
    [
      {
        title: "Tout savoir sur le pourquoi du comment avec qui. 4",
        text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam ipsum placeat quisquam sequi culpa, debitis.",
        cta: {
          href: "/lorem",
          ariaLabel: "Lorem"
        }
      },
      {
        title: "Tout savoir sur le pourquoi. 4",
        text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
        cta: {
          href: "/lorem",
          ariaLabel: "Lorem"
        }
      }
    ]
  ];
  indexMax: number = this.cardGroups.length - 1;

  constructor() {}

  setActive(index: number): void {
    this.activeIndex = index;
  }

  onClickPrev(): void {
    if(this.activeIndex > this.indexMin) {
      this.activeIndex--;
    } else {
      this.activeIndex = this.indexMax;
    }
  }

  onClickNext(): void {
    if(this.activeIndex < this.indexMax) {
      this.activeIndex++;
    } else {
      this.activeIndex = this.indexMin;
    }
  }
}
