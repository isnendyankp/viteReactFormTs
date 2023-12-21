

interface Props {
    children: string;
}


const Text = ({ children } : Props) => {

    return (
        <p>{children}</p>
    )
}

export default Text;


// Progress:
// 1. cr8 Text component
// 2. Cr8 type Props with children props with type string
// 3. Add children props/parameter with type Props to Text component
// 4. Render children props/parameter to p element