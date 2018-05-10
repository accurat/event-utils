function preventingDefault(fn) {
  return e => {
    e.preventDefault()

    // react supports passing null to event bindings
    if (fn === null) return null

    return fn(e)
  }
}

function stoppingPropagation(fn) {
  return e => {
    e.stopPropagation()

    if (fn === null) return null

    return fn(e)
  }
}

function eventValueExtractor(fn) {
  if (fn === null) return null

  return e => fn(e.currentTarget.value)
}

function eventTargetExtractor(fn) {
  if (fn === null) return null

  return e => fn(e.currentTarget)
}

function addArguments(fn, ...args) {
  if (fn === null) return null

  return (...oldArgs) => fn(...oldArgs, ...args)
}

function replaceArguments(fn, ...args) {
  if (fn === null) return null

  return () => fn(...args)
}

function attachListenersToKeys(keysListenersAssociation) {
  return e => {
    if (keysListenersAssociation.hasOwnProperty(e.key)) {
      return keysListenersAssociation[e.key](e)
    }
  }
}


module.exports = {
	preventingDefault,
	stoppingPropagation,
	eventValueExtractor,
	eventTargetExtractor,
	addArguments,
	replaceArguments,
  attachListenersToKeys,
}
