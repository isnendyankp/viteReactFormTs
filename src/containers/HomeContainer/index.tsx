import { Input } from "../../components"

const HomeContainer = () => {

    return (
        <div>
            <Input className="block border-neutral-400" />
        </div>
    )
}

export default HomeContainer

// Progress:
// 1. cr8 HomeContainer component
// 2. import input component
// 3. render with pass in input component
// 4. Add className props to input component with value display block and border neutral 400