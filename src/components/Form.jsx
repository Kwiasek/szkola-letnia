import SectionHeader from "./project/SectionHeader";

import formValidation from "../js/formValidation";
import { useEffect } from "react";

const Form = () => {
  useEffect(() => {
    const errorsFields = document.querySelectorAll(".form-error");

    errorsFields.forEach((error) => {
      error.classList.add("opacity-0");
    });
  });

  return (
    <div id="sign-up" className="my-10 flex gap-10">
      <div className="left w-2/3 bg-coffee-400 p-5 rounded-xl">
        <SectionHeader text="DOŁĄCZ TERAZ" />
        {/* <h2 className="text-3xl text-center font-bold mb-5">DOŁĄCZ TERAZ</h2> */}

        <div className="mx-auto">
          <form className="flex flex-col" method="POST">
            {/* Sterowanie tym, czy error sie wyświetla za pomocą opacity-0, żeby nie przesuwał elementów w formularzu */}

            <div className="flex gap-10">
              <div className="flex flex-col left w-2/5">
                {/*----- IMIE -----  */}
                <label
                  className="text-xl font-semibold tracking-wide ml-2"
                  htmlFor="name"
                >
                  Imię:
                </label>
                <input
                  className="text-xl p-2 bg-coffee-200 rounded-2xl border-2 border-coffee-600"
                  type="text"
                  name="name"
                  id="name"
                />
                <p
                  id="error-name"
                  className="form-error mb-3 ml-2 text-rose-600 text-sm"
                >
                  Przykładowy komunikat oznaczający bład
                </p>
              </div>
              <div className="flex flex-col right w-3/5">
                {/*----- NAZWISKO -----  */}
                <label
                  className="text-xl font-semibold tracking-wide ml-2"
                  htmlFor="surname"
                >
                  Nazwisko:
                </label>
                <input
                  className="text-xl p-2 bg-coffee-200 rounded-2xl border-2 border-coffee-600"
                  type="text"
                  name="surname"
                  id="surname"
                />
                <p
                  id="error-surname"
                  className="form-error mb-3 ml-2 text-rose-600 text-sm"
                >
                  Przykładowy komunikat oznaczający bład
                </p>
              </div>
            </div>

            {/*----- EMAIL -----  */}
            <label
              className="text-xl font-semibold tracking-wide ml-2"
              htmlFor="email"
            >
              Email:
            </label>
            <input
              className="text-xl p-2 bg-coffee-200 rounded-2xl border-2 border-coffee-600"
              type="email"
              name="email"
              id="email"
            />
            <p
              id="error-email"
              className="form-error mb-10 ml-2 text-rose-600 text-sm"
            >
              Przykładowy komunikat oznaczający bład
            </p>

            <div className="flex gap-10">
              <div className="flex flex-col left w-2/5">
                {/*----- NR DOMU -----  */}
                <label
                  htmlFor="house-nr"
                  className="text-xl font-semibold tracking-wide ml-2"
                >
                  Numer domu/lokalu:
                </label>
                <input
                  className="text-xl p-2 bg-coffee-200 rounded-2xl border-2 border-coffee-600"
                  type="text"
                  name="house-nr"
                  id="house-nr"
                />
                <p
                  id="error-nr"
                  className="form-error mb-3 ml-2 text-rose-600 text-sm"
                >
                  Przykładowy komunikat oznaczający bład
                </p>
              </div>
              <div className="flex flex-col left w-3/5">
                {/*----- ULICA -----  */}
                <label
                  htmlFor="street"
                  className="text-xl font-semibold tracking-wide ml-2"
                >
                  Ulica:
                </label>
                <input
                  className="text-xl p-2 bg-coffee-200 rounded-2xl border-2 border-coffee-600"
                  type="text"
                  name="street"
                  id="street"
                />
                <p
                  id="error-street"
                  className="form-error mb-3 ml-2 text-rose-600 text-sm"
                >
                  Przykładowy komunikat oznaczający bład
                </p>
              </div>
            </div>

            <div className="flex gap-10 mb-10">
              <div className="flex flex-col left w-2/5">
                {/*----- KOD POCZTOWY -----  */}
                <label
                  htmlFor="zip-code"
                  className="text-xl font-semibold tracking-wide ml-2"
                >
                  Kod pocztowy:
                </label>
                <input
                  className="text-xl p-2 bg-coffee-200 rounded-2xl border-2 border-coffee-600"
                  type="text"
                  name="zip-code"
                  id="zip-code"
                />
                <p
                  id="error-zip-code"
                  className="form-error ml-2 text-rose-600 text-sm"
                >
                  Przykładowy komunikat oznaczający bład
                </p>
              </div>

              <div className="flex flex-col right w-3/5">
                {/*----- MIEJSCOWOSC -----  */}
                <label
                  htmlFor="city"
                  className="text-xl font-semibold tracking-wide ml-2"
                >
                  Miejscowość:
                </label>
                <input
                  className="text-xl p-2 bg-coffee-200 rounded-2xl border-2 border-coffee-600"
                  type="text"
                  name="city"
                  id="city"
                />
                <p
                  id="error-city"
                  className="form-error ml-2 text-rose-600 text-sm"
                >
                  Przykładowy komunikat oznaczający bład
                </p>
              </div>
            </div>

            {/*----- GRUPA WIEKOWA -----  */}
            <label
              htmlFor="age-group"
              className="text-xl font-semibold tracking-wide ml-2"
            >
              Grupa wiekowa
            </label>
            <select
              className="text-xl p-2 bg-coffee-200 rounded-2xl border-2 border-coffee-600"
              name="age-group"
              id="age-group"
            >
              <option value="age-group-1">16-18 lat</option>
              <option value="age-group-2">19-21 lat</option>
              <option value="age-group-3">22-24 lat</option>
            </select>
            <p
              id="error-age-group"
              className="form-error mb-3 ml-2 text-rose-600 text-sm"
            >
              Przykładowy komunikat oznaczający bład
            </p>

            {/*----- TERMIN -----  */}
            <label
              htmlFor="term"
              className="text-xl font-semibold tracking-wide ml-2"
            >
              Termin:
            </label>
            <select
              className="text-xl p-2 bg-coffee-200 rounded-2xl border-2 border-coffee-600"
              name="term"
              id="term"
            >
              <option value="june">czerwiec</option>
              <option value="july">lipec</option>
              <option value="august">sierpień</option>
              <option value="september">wrzesień</option>
            </select>
            <p
              id="error-term"
              className="form-error mb-10 ml-2 text-rose-600 text-sm"
            >
              Przykładowy komunikat oznaczający bład
            </p>

            {/*----- SUBMIT -----  */}
            <button
              id="submit-btn"
              type="button"
              className="bg-coffee-600 text-slate-200 text-3xl w-1/3 mx-auto rounded-3xl px-5 py-2 hover:bg-yellow-800/70"
              onClick={formValidation}
            >
              Zapisz się
            </button>
          </form>
        </div>
      </div>

      {/* MAPA ??? */}
      <div className="right w-1/3 bg-lime-500 p-5">TEMPORARY</div>
    </div>
  );
};

export default Form;
