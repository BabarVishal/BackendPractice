const AsHander = (AShander) =>{
    (req, res, next) => {
      Promise.resolve(AShander(req, res, next))
      .catch((err) => next(err))
    }
}

export {AsHander}

// const AsHander = (fn) =>async (req, res, next) =>{
//  try {
//     await fn(req, res, next)
//  } catch (error) {
//      res.status(error.code || 40000).json({
//         success: false,
//         message: error.message
//      })
//  }
// }