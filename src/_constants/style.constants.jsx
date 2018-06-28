export const styles = {
    contentContainer: {
        display: "flex",
        flexDirection: "column",
    },
    headerStyle: {
        backgroundColor: "blanchedalmond",
        height: "50px",
        color: "black",
        //color: "blueviolet",
        display: "flex" 
    },
    headerMenu: {
        display: "flex",
        flexGrow: "2",
        alignItems: "center",
        paddingLeft: "20px"
    },
    headerStatus: {
        display: "flex",
        flexGrow: "1",
        paddingRight: "10px",
        paddingTop: "0.2%",
        alignItems: "flex-end",
        justifyContent: "flex-start",
        flexDirection: "column"
    },
    headerDropDown: {
        display: "none",
        backgroundColor: "#f9f9f9",
        minWidth: "130px",
        boxShadow: "0px 8px 16px 0px rgba(0,0,0,0.2)",
        zIndex: "1",
        position: "absolute",
        width: "30px"
    },
    content: {
        width: "100%",
        marginLeft: "0",
        display: "flex",
        flexDirection: "row",
    },
    usersModul: {
        display: "flex",
        flexDirection: "column",
        flexGrow: 2,
        alignItems: "center",
    },
    sessionsModul: {
        display: "flex",
        flexGrow: 1,
        alignItems: "flex-end",
        marginTop: "0.75%",
        marginRight: "3%",
        flexDirection: "column",
    }            
};