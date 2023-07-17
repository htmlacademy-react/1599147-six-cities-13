import Footer from '../../components/footer/footer';
import Header from '../../components/header/header';
import './not-found-page.css';

export default function NotFoundPage(): JSX.Element {
  return (
    <div className="page page--not-found">
      <Header />
      <main className="page__main page__main--not-found page__main--favorites-empty">
        <div className="page__favorites-container container">
          <section className="not-found-text ">
            <h1 className="visually-hidden">404 - Page not found</h1>
            <div className="not-found__wrapper">
              <b className="not-found__status">404</b>
              <br/>
              <p className="not-found__status-description">A page is not found</p>
              <p className="not-found__status-description">Perhaps you are tired. Try logging off, taking a break and then entering the address again</p>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
}
