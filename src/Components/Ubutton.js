import { Button } from "@mui/material"

export default function UButton(props) {
    const [label,onclick ,variant]=props
    
    return 
    <>
        <Button variant={variant}  label={ label}onclick={onclick} />
        
    </>
}