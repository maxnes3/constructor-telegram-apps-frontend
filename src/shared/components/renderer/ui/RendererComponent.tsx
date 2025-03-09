import { FC, useRef, useEffect } from 'react';
import classes from './styles.module.scss';

type RendererProps = {
  html: string;
  css: string;
};

export const Renderer: FC<RendererProps> = ({ html, css }) => {
  const wrapperRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!wrapperRef.current) return;
    const shadowRoot =
      wrapperRef.current.shadowRoot ||
      wrapperRef.current.attachShadow({ mode: 'open' });

    while (shadowRoot.firstChild) {
      shadowRoot.removeChild(shadowRoot.firstChild);
    }

    const styleElement = document.createElement('style');
    styleElement.textContent = css;
    shadowRoot.appendChild(styleElement);

    const contentDiv = document.createElement('div');
    contentDiv.innerHTML = html;
    shadowRoot.appendChild(contentDiv);
  }, [html, css]);

  return <div ref={wrapperRef} className={classes.rendererContainer}></div>;
};
