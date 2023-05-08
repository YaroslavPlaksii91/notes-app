import s from './Container.module.css';

export const Container = ({ className, children }) => {
  const containerClass = className
    ? `${s['container']} ${s[className]}`
    : s.container;

  return <div className={containerClass}>{children}</div>;
};
