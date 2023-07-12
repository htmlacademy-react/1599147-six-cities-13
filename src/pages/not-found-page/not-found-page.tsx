import Footer from '../../components/footer/footer';
import Header from '../../components/header/header';

export default function NotFoundPage(): JSX.Element {
  return (
    <div className="page page--gray page--main">
      <Header />
      <main className="page__main page__main--favorites page__main--favorites-empty">
        <div className="page__favorites-container container">
          <section className="favorites favorites--empty">
            <h1 className="visually-hidden">404 - Page not found</h1>
            <div className="favorites__status-wrapper">
              <b className="favorites__status">404</b>
              <br/>
              <p className="favorites__status-description">A page is not found</p>
              <p className="favorites__status-description">Perhaps you are tired. Try logging off, taking a break and then entering the address again</p>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
}
