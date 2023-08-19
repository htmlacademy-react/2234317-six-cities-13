import {Helmet} from 'react-helmet-async';
import classNames from 'classnames';
import Header from '../../components/header/header';
import Footer from '../../components/footer/footer';

type MainLayoutProps = {
  className?: string;
  pageTitle: string;
  withFooter?: boolean;
  children: JSX.Element;
}

function MainLayout({className, pageTitle, children, withFooter}: MainLayoutProps): JSX.Element {
  return (
    <div className={classNames('page', className)}>
      <Helmet>
        <title>{pageTitle}</title>
      </Helmet>
      <Header />
      {children}
      {withFooter && <Footer/>}
    </div>
  );
}

export default MainLayout;
