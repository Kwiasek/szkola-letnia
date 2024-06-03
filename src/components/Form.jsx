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
    <div id="sign-up" className="my-10 flex gap-10 justify-center">
      <div className="flex flex-col left w-2/3">
        <SectionHeader text="DOŁĄCZ TERAZ" />
        <div className="p-5 bg-coffee-500  rounded-xl border-2 border-coffee-800">
          <div className="mx-auto">
            <form className="flex flex-col" method="POST">
              <div className="flex gap-10">
                <div className="flex flex-col left w-2/5">
                  {/*----- IMIE -----  */}
                  <label
                    className="text-lg font-semibold tracking-wide ml-2"
                    htmlFor="name"
                  >
                    Imię:
                  </label>
                  <input
                    className="text-lg p-1.5 bg-coffee-200 rounded-2xl border-2 border-coffee-700 focus:outline-coffee-900"
                    type="text"
                    name="name"
                    id="name"
                  />
                  <p
                    id="error-name"
                    className="form-error mb-1 ml-2 text-rose-600 text-sm"
                  >
                    Przykładowy komunikat oznaczający bład
                  </p>
                </div>
                <div className="flex flex-col right w-3/5">
                  {/*----- NAZWISKO -----  */}
                  <label
                    className="text-lg font-semibold tracking-wide ml-2"
                    htmlFor="surname"
                  >
                    Nazwisko:
                  </label>
                  <input
                    className="text-lg p-1.5 bg-coffee-200 rounded-2xl border-2 border-coffee-700 focus:outline-coffee-900"
                    type="text"
                    name="surname"
                    id="surname"
                  />
                  <p
                    id="error-surname"
                    className="form-error mb-1 ml-2 text-rose-600 text-sm"
                  >
                    Przykładowy komunikat oznaczający bład
                  </p>
                </div>
              </div>

              {/*----- EMAIL -----  */}
              <label
                className="text-lg font-semibold tracking-wide ml-2"
                htmlFor="email"
              >
                Email:
              </label>
              <input
                className="text-lg p-1.5 bg-coffee-200 rounded-2xl border-2 border-coffee-700 focus:outline-coffee-900"
                type="email"
                name="email"
                id="email"
              />
              <p
                id="error-email"
                className="form-error mb-3 ml-2 text-rose-600 text-sm"
              >
                Przykładowy komunikat oznaczający bład
              </p>

              <div className="flex gap-10">
                <div className="flex flex-col left w-2/5">
                  {/*----- NR DOMU -----  */}
                  <label
                    className="text-lg font-semibold tracking-wide ml-2"
                    htmlFor="house-nr"
                  >
                    Numer domu/lokalu:
                  </label>
                  <input
                    className="text-lg p-1.5 bg-coffee-200 rounded-2xl border-2 border-coffee-700 focus:outline-coffee-900"
                    type="text"
                    name="house-nr"
                    id="house-nr"
                  />
                  <p
                    id="error-nr"
                    className="form-error mb-1 ml-2 text-rose-600 text-sm"
                  >
                    Przykładowy komunikat oznaczający bład
                  </p>
                </div>
                <div className="flex flex-col left w-3/5">
                  {/*----- ULICA -----  */}
                  <label
                    className="text-lg font-semibold tracking-wide ml-2"
                    htmlFor="street"
                  >
                    Ulica:
                  </label>
                  <input
                    className="text-lg p-1.5 bg-coffee-200 rounded-2xl border-2 border-coffee-700 focus:outline-coffee-900"
                    type="text"
                    name="street"
                    id="street"
                  />
                  <p
                    id="error-street"
                    className="form-error mb-1 ml-2 text-rose-600 text-sm"
                  >
                    Przykładowy komunikat oznaczający bład
                  </p>
                </div>
              </div>

              <div className="flex gap-10 mb-3">
                <div className="flex flex-col left w-2/5">
                  {/*----- KOD POCZTOWY -----  */}
                  <label
                    className="text-lg font-semibold tracking-wide ml-2"
                    htmlFor="zip-code"
                  >
                    Kod pocztowy:
                  </label>
                  <input
                    className="text-lg p-1.5 bg-coffee-200 rounded-2xl border-2 border-coffee-700 focus:outline-coffee-900"
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
                    className="text-lg font-semibold tracking-wide ml-2"
                    htmlFor="city"
                  >
                    Miejscowość:
                  </label>
                  <input
                    className="text-lg p-1.5 bg-coffee-200 rounded-2xl border-2 border-coffee-700 focus:outline-coffee-900"
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
                className="text-lg font-semibold tracking-wide ml-2"
              >
                Grupa wiekowa
              </label>
              <select
                className="text-lg p-2 bg-coffee-200 rounded-2xl border-2 border-coffee-700 focus:outline-coffee-900"
                name="age-group"
                id="age-group"
                defaultValue="empty"
              >
                <option value="empty" disabled>
                  Wybierz grupę wiekową...
                </option>
                <option value="age-group-1">16-18 lat</option>
                <option value="age-group-2">19-21 lat</option>
                <option value="age-group-3">22-24 lat</option>
              </select>
              <p
                id="error-age-group"
                className="form-error mb-1 ml-2 text-rose-600 text-sm"
              >
                Przykładowy komunikat oznaczający bład
              </p>

              {/*----- TERMIN -----  */}
              <label
                htmlFor="term"
                className="text-lg font-semibold tracking-wide ml-2"
              >
                Termin:
              </label>
              <select
                className="text-lg p-2 bg-coffee-200 rounded-2xl border-2 border-coffee-700 focus:outline-coffee-900"
                name="term"
                id="term"
                defaultValue="empty"
              >
                <option value="empty" disabled>
                  Wybierz termin...
                </option>
                <option value="june">czerwiec</option>
                <option value="july">lipec</option>
                <option value="august">sierpień</option>
                <option value="september">wrzesień</option>
              </select>
              <p
                id="error-term"
                className="form-error mb-3 ml-2 text-rose-600 text-sm"
              >
                Przykładowy komunikat oznaczający bład
              </p>

              {/*----- SUBMIT -----  */}
              <button
                id="submit-btn"
                type="button"
                className="bg-coffee-700 text-coffee-100 text-4xl max-w-1/3 mx-auto rounded-3xl border-2 border-coffee-800 px-5 py-2 hover:bg-coffee-900 transition"
                onClick={formValidation}
              >
                Zapisz się
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* MAPA ??? */}
      {/* <aside className="right w-1/3 rounded-xl flex flex-col content-stretch">
        <SectionHeader text="KONTAKT" />
        <div className="bg-coffee-200">

        </div>
      </aside> */}
    </div>
  );
};

export default Form;
