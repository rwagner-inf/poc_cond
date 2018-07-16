export const TEMPLATE_ACCESS_TOKEN = "{\"location\": \"HEADER\", \"name\": \"access_token\"}"
export const TEMPLATE_MOCK = "{\"body\": \"{'name': 'Mock Example'}\", \"status\": \"200\"}"
export const TEMPLATE_RATTING = "{\"calls\":20,\"interval\":\"MINUTES\"}";
export const TEMPLATE_IPS = "{\"ips\": [ \"127.0.0.0\", \"127.0.0.1\" ]}"

export const getTemplate = (type) => {
    if (type === 'ACCESS_TOKEN') {
        return TEMPLATE_ACCESS_TOKEN
    }

    if (type === 'CLIENT_ID') {
        return TEMPLATE_ACCESS_TOKEN
    }

    if (type === 'MOCK') {
        return TEMPLATE_MOCK
    }

    if (type === 'RATTING') {
        return TEMPLATE_RATTING
    }

    if (type === 'BLACKLIST' || type === 'WHITELIST'){
        return TEMPLATE_IPS
    }
}

export const interceptorSort = (first, second) => {

    if (first.lifeCycle === 'PLAN' && second.lifeCycle !== 'PLAN') {
        return -1
    }

    if (first.lifeCycle !== 'PLAN' && second.lifeCycle === 'PLAN') {
        return 1
    }

    if (first.lifeCycle === 'PLAN' && second.lifeCycle === 'PLAN') {
        if (first.order < second.order) return -1
        if (first.order > second.order) return 1
    }

    if (first.lifeCycle === 'RESOURCE' && second.lifeCycle !== 'RESOURCE') {
        return -1
    }

    if (first.lifeCycle !== 'RESOURCE' && second.lifeCycle === 'RESOURCE') {
        return 1
    }

    if (first.lifeCycle === 'RESOURCE' && second.lifeCycle === 'RESOURCE') {
        if (first.order < second.order) return -1
        if (first.order > second.order) return 1
    }

    if (first.lifeCycle === 'OPERATION' && second.lifeCycle !== 'OPERATION') {
        return -1
    }

    if (first.lifeCycle !== 'OPERATION' && second.lifeCycle === 'OPERATION') {
        return 1
    }

    if (first.lifeCycle === 'OPERATION' && second.lifeCycle === 'OPERATION') {
        if (first.order < second.order) return -1
        if (first.order > second.order) return 1
    }

    return 0
}