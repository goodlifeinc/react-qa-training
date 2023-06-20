export const requestMiddleware = _store => next => async action => {
	if (action.payload?.request) {
		action.requestState = 'pending';
		next({...action});
		await new Promise(resolve => setTimeout(resolve, 500));
		action.requestState = 'finished';
		action.response = { user: { firstName: 'John', lastName: 'Doe' } };
	}
	if (action.type === "counter/increment") {
		action.foo = 'bar';
	}
	return next({...action});
}

// requestMiddleware({})(() => {})({});