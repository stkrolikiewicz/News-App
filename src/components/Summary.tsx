const Summary = () => {
  return (
    <div className="flex flex-col gap-2">
      <h1 className="text-xl font-semibold">Co mi sprawiło największą trudność? &#128531;</h1>
      <ul className="list-inside">
        <li>&#9940; Napisanie testu do jakiegoś komponentu. Otatecznie nie udało mi się dobrze skonfigurować środowiska testowego i nie zaimplementowałem żadnego działającego testu.</li>
        <li>&#9940; Stworzenie popupów sprawiło mi problem. Myślę, że mógłbym je zrobić lepiej, ale tak czy siak cieszę się z efektu końcowego biorąc pod uwagę ograniczenie czasu na projekt.</li>
        <li>&#9940; Myślę, że powininienem bardziej się oprzeć na gotowych componentach np headless UI. Zabrakło mi czasu na ujednolicenie i uporządkowanie stylów: headingi, kolory, moduły.</li>
      </ul>
      <h1 className="text-xl font-semibold">Co mi sprawiło największą frajdę? &#128513;</h1>
      <ul className="list-inside">
        <li>&#9889; Super było stworzyć coś przy użyciu biblioteki Redux-Toolkit!</li>
        <li>&#9889; Jestem fanem Tailwinda. Tworzenie ładnego layoutu przy użyciu tego narzędzia jest super proste i przyjemne!</li>
        <li>&#9889; Fetchowanie danych przy użyciu SWR daje mnóstwo możliwości i świetnie porządkuje requesty do API, a implementacja tego rozwiązania jest bardzo prosta!</li>
        <li>&#9889; Jestem zadaniowcem - odhaczanie kolejnych tasków dawało mi dużo satyfakcji.</li>
        <li>&#9889; Mimo, że nie zdążyłem wykonać zadania dodatkowego, to dodałem coś od siebie: opcję wyszukiwania na stronie głównej.</li>
      </ul>
    </div>
  )
}

export default Summary