import React from 'react';
import './breadcrumbs.css';

const Breadcrumbs = ({ items = [], separator = '/', onNavigate }) => {
  const handleClick = (event, item) => {
    if (!onNavigate || !item.href) {
      return;
    }

    event.preventDefault();
    onNavigate(item);
  };

  return (
    <nav aria-label="Breadcrumb" className="minilo-breadcrumbs-nav">
      <ol className="minilo-breadcrumbs-list">
        {items.map((item, index) => {
          const isLast = index === items.length - 1;
          return (
            <li key={`${item.label}-${index}`} className="minilo-breadcrumb-item">
              {item.href && !isLast ? (
                <a href={item.href} className="minilo-breadcrumb-link" onClick={(event) => handleClick(event, item)}>
                  {item.label}
                </a>
              ) : (
                <span className="minilo-breadcrumb-current" aria-current={isLast ? 'page' : undefined}>
                  {item.label}
                </span>
              )}

              {!isLast ? <span className="minilo-breadcrumb-separator">{separator}</span> : null}
            </li>
          );
        })}
      </ol>
    </nav>
  );
};

export default Breadcrumbs;
