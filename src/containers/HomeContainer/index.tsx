import { Input, Text, Button } from "../../components"
import { Formik, Form, useFormik } from "formik";

const HomeContainer = () => {

    const formMik = useFormik({
      initialValues: {
        nama: '',
        umur: '',
        hobi: '',
      },
      onSubmit: () => console.log(),
    });

        return (
          <>
              <Form>
                {/* Input Nama */}
                <div>
                  <Text>{'Nama'}</Text>
                  <Input
                    className="block border-neutral-400 border"
                    name={'nama'}
                    value={formMik.values.nama}
                    onChange={formMik.handleChange('nama')}
                  />
                </div>
                {/* Input Umur */}
                <div>
                  <Text>{'Umur'}</Text>
                  <Input
                    className="block border-neutral-400 border"
                    name={'umur'}
                    value={formMik.values.umur}
                    onChange={formMik.handleChange('umur')}
                  />
                </div>
                {/* Input Hobi */}
                <div>
                  <Text>{'Hobi'}</Text>
                  <Input
                    className="block border-neutral-400 border"
                    name={'hobi'}
                    value={formMik.values.hobi}
                    onChange={formMik.handleChange('hobi')}
                  />
                </div>
                {/* Button Submit */}
                <Button
                  label={'Submit'}
                  type={'submit'}
                  className={'bg-green-500'}
                />
              </Form>
          </>
        );
}

export default HomeContainer

// Progress:
// 1. cr8 HomeContainer component
// 2. import input component
// 3. render with pass in input component
// 4. Add className props to input component with value display block and border neutral 400
// 5. Add value border same as border-width: 1px from tailwind
// 6. import Text component and render it with children props Home Container
// 7. pass in children props to Text component with value Nama
// 8. Add new text & input element to div element and wrap it with react fragment for umur & hobi
// 9. import Button component
// 10. render with pass in Button component with label props & value Submit
// 11. Add type submit because @Button component interface has extended ButtonHTMLAttributes<HTMLButtonElement> from react
// 12. Add tailwind bg-green-500 to button element with className props
// 13. import Form from formik
// 14. warp all input, text, button element with Form component inside Formik component
// 15. fix import from formik with add Formik to Formik component
// 16. Add initialValues props to Formik component with value nama, umur, hobi & empty string value & onSubmit props with value console.log(values)
// 17. Connecting input with initialValues props with add name props to input component with value nama, umur, hobi(like  name={'nama'}, name={'umur'}, name={'hobi'})
// 18. cr8 formMik with useFormik hook from formik
// 19. pass in initialValues props to useFormik hook with value nama, umur, hobi & empty string value & onSubmit props with value console.log(values)
// 20. add value props to input component to get value after input text with value formMik.values.nama, formMik.values.umur, formMik.values.hobi
// 21. add onChange props to input component with value formMik.handleChange('nama'), formMik.handleChange('umur'), formMik.handleChange('hobi')
