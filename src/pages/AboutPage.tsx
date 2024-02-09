import { FC, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Dispatch } from "redux";
import { AboutPageAction } from "../store/reducers/about";
import ObjDescriptionBlock from "../components/ObjDescriptionBlock";
import '../scss/AboutPage/AboutPage.scss';

const AboutPage: FC = () => {
  const dispatch = useDispatch<Dispatch<AboutPageAction>>();

  useEffect(() => {
    dispatch({type: 'CHANGE_ABOUT_PAGE_STATUS', payload: true});
    document.addEventListener('scroll', animateBlocks);
    animateBlocks();

    return (): void => {
      dispatch({type: 'CHANGE_ABOUT_PAGE_STATUS', payload: false});
      document.removeEventListener('scroll', animateBlocks);
    }
  }, []);

  function animateBlocks(): void {
    const blocks: NodeListOf<HTMLDivElement> = document.querySelectorAll('.obj-description');

    blocks.forEach((block: HTMLDivElement) => {
      if (window.pageYOffset + window.innerHeight / 1.5 > block.offsetTop) {
        block.classList.add('obj-desription_animated');
      }
    });
  }

  return (  
    <div className="about">
      <div className="container">
        <h1>About me and this project</h1>

        <ObjDescriptionBlock caption="Little info about me" img="/img/about/aboutme.png" side="left">
          I’m 17 years old guy, who is just fond of software engineering. More than 1 year ago, when I knew only Pascal from school and C++ from college on beginner level, I decided to learn some new programming language. Then I’ve chosen JavaScript. That’s how I discovered web-developing. Now I’m still exploring it. My main goal for now is to become a front-end developer.
        </ObjDescriptionBlock>
        <p className="pic-link">Picture has been taken from this source: https://www.istockphoto.com/</p>

        <h2>Technlogies used in this project</h2>
        <ObjDescriptionBlock caption="HTML" img="/img/about/html.png" side="left">
          HTML is a standardized document markup language for viewing web pages in a browser. Web browsers receive an HTML document from the server using HTTP/HTTPS protocols or open it from a local disk, then interpret the code into the interface that will be displayed on the monitor screen.
        </ObjDescriptionBlock>

        <ObjDescriptionBlock caption="CSS" img="/img/about/css.png" side="right">
          CSS is a special style language used to describe the appearance of pages. The pages themselves are written in data markup languages. CSS is the core technology of the World Wide Web, along with HTML and JavaScript.
        </ObjDescriptionBlock>

        <ObjDescriptionBlock caption="SASS (Scss)" img="/img/about/sass.png" side="left">
          Sass is a preprocessor scripting language that is compiled into CSS. Sass consists of two syntaxes. The original syntax (SASS), uses indentation to separate rules. The newer syntax, SCSS, uses block formatting like that of CSS: braces to denote code blocks and semicolons to separate rules within a block.
        </ObjDescriptionBlock>

        <ObjDescriptionBlock caption="TypeScript" img="/img/about/ts.png" side="right">
          TypeScript is a programming language presented by Microsoft in the fall of 2012; is positioned as a web application development tool that extends the capabilities of JavaScript. The developer of the TypeScript language is Anders Geilsberg, who previously created C#, Turbo Pascal and Delphi
        </ObjDescriptionBlock>
        
        <ObjDescriptionBlock caption="React" img="/img/about/react.png" side="left">
          React is an open-source JavaScript library for creating user interfaces designed to solve the problems of partially updating the content of a web page encountered in the development of single-page applications. React allows developers to build large web applications that use data that changes over time without reloading the page.
        </ObjDescriptionBlock>

        <ObjDescriptionBlock caption="Redux" img="/img/about/redux.png" side="right">
          Redux is an open-source JavaScript library for managing and centralizing application state. It is most commonly used with libraries such as React or Angular for building user interfaces. Similar to (and inspired by) Facebook's Flux architecture, it was created by Dan Abramov and Andrew Clark. 
        </ObjDescriptionBlock>
      </div>
    </div>
  );
}
 
export default AboutPage;