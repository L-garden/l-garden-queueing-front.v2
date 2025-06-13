interface QueueProp {
    isAdmin?: boolean
}
export default ({isAdmin}: QueueProp) => {
    return (
        <div>
            {
                isAdmin ? <>isAdmin</> : <>notAdmin</>
            }
        </div>
    )
}