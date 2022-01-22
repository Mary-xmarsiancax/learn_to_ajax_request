//create function for everyone requests


const createTask = (title) => {
    const promise = axios.post(`https://repetitora.net/api/JS/Tasks`, {
        title: title,
        widgetId: 333
    })
    return promise.then((response) => {
        return response.data;
    });
}

const updateTask = (title, id) => {
    const promise = axios.put(`https://repetitora.net/api/JS/Tasks`, {
        title: title,
        widgetId:333,
        taskId:id
    })
    return promise.then((response) => {
        return response.data;
    });
}



const deleteTask = (id) => {
    const promise = axios.delete(`https://repetitora.net/api/JS/Tasks?widgetId=333&taskId=${id}`)
    return promise.then((response) => {
        return response.data;
    });
}

const getTasks = (pageNumber = 1) => {
    const promise = axios.get(`https://repetitora.net/api/JS/Tasks?widgetId=333&page=${pageNumber}&count=100`);
    return promise.then((response) => {
        return response.data;
    });
}

const getImg = (pageNumber) => {
    const promise = axios.get(`https://repetitora.net/api/JS/Images?page=${pageNumber}&count=1`);
    return promise.then((response) => {
        return response.data;
    });
}



