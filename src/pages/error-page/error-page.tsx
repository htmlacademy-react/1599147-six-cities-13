import Footer from '../../components/footer/footer';
import Header from '../../components/header/header';

export default function ErrorPage(): JSX.Element {
  return (
    <div className="page page--gray page--main">
      <Header />
      <main className="page__main page__main--favorites page__main--favorites-empty">
        <div className="page__favorites-container container">
          <section className="favorites favorites--empty">
            <h1 className="visually-hidden">Error</h1>
            <div className="favorites__status-wrapper">
              <b className="favorites__status">Application error.</b>
              <p className="favorites__status-description">тут должен быть  код и текст ошибки, а еще нужно классы заменить.</p>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
}
