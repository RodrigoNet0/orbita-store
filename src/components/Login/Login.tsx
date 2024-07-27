
import { Form, Formik } from "formik";

export default function Login() {
  interface Values {
    email: string;
    password: string;
  }

  const initialValues = {
    email: "",
    password: "",
  };

  const handleSubmit = (values: Values) => {
    console.log(values);
  };

  return (
    <>
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validateOnChange={false}
        validateOnBlur={false}
        validateOnMount={false}
      >
        <Form>
          <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
            <div className="sm:mx-auto sm:w-full sm:max-w-sm">
              <img
                alt="Your Company"
                src="https://th.bing.com/th/id/R.f3bfccf5dea52a582a1be4f5df7a0f81?rik=VriFWXHAqTPdQA&riu=http%3a%2f%2fupload.wikimedia.org%2fwikipedia%2fit%2f8%2f81%2fSao_Paulo_FC_Logo.png&ehk=JTRoeVDdE0lOc%2fh3LvxZUczjI5gZQc3x1X%2bN4eLOEwo%3d&risl=&pid=ImgRaw&r=0"
                className="mx-auto h-10 w-auto"
              />
              <h2 className="mt-10  text-2xl font-bold leading-9 tracking-tight text-gray-900">
                Entre na sua conta
              </h2>
            </div>

            <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
              <form action="#" method="POST" className="space-y-6">
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Email
                  </label>
                  <div className="mt-2">
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      autoComplete="email"
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>

                <div>
                  <div className="flex items-center justify-between">
                    <label
                      htmlFor="password"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      Senha
                    </label>
                    <div className="text-sm">
                      <a
                        href="#"
                        className="font-semibold text-indigo-600 hover:text-indigo-500"
                      >
                        Esqueceu a senha?
                      </a>
                    </div>
                  </div>
                  <div className="mt-2">
                    <input
                      id="password"
                      name="password"
                      type="password"
                      required
                      autoComplete="current-password"
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>

                <div>
                  <button
                    type="submit"
                    className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                  >
                    Entre
                  </button>
                </div>
              </form>

              <p className="mt-10 text-center text-sm text-gray-500">
                Não é membro?{" "}
                <a
                  href="#"
                  className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
                >
                  Comece uma 14 dias gratuita
                </a>
              </p>
            </div>
          </div>
        </Form>
      </Formik>
    </>
  );
}