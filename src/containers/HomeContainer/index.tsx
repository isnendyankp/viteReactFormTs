import { Input, Text } from "../../components"

const HomeContainer = () => {

    return (
        <div>
            <Text>{'Nama'}</Text>
            <Input className="block border-neutral-400 border" />
        </div>
    )
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