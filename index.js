function preventingDefault(fn) {
  // react supports passing null to event bindings
  if (fn === null) return null

  return e => {
    e.preventDefault()
    return fn(e)
  }
}

function stoppingPropagation(fn) {
  if (fn === null) return null

  return e => {
    e.stopPropagation()
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


module.exports = {
	preventingDefault,
	stoppingPropagation,
	eventValueExtractor,
	eventTargetExtractor,
	addArguments,
	replaceArguments,
}
