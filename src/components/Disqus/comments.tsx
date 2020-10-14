// Comments.js
// https://github.com/neomaxzero/useDisqus
import React, { useEffect } from 'react'

interface CommentsProps {
  fullUrl: string
  id: string
}

const Comments = ({ fullUrl, id }: CommentsProps) => {
  useEffect(() => {
    const DISQUS_SCRIPT = 'disq_script'
    const sd = document.getElementById(DISQUS_SCRIPT)
    if (!sd) {
      var disqus_config = function () {
        this.page.url = fullUrl
        this.page.identifier = id
      }

      const d = document
      const s = d.createElement('script')
      s.src = 'https://vilhelmina-musik.disqus.com/embed.js'
      s.id = DISQUS_SCRIPT
      s.async = true
      // @ts-ignore
      s.setAttribute('data-timestamp', +new Date())

      d.body.appendChild(s)
    } else {
      // @ts-ignore
      window.DISQUS.reset({
        reload: true,
        config: disqus_config,
      })
    }
  }, [])

  return <div id="disqus_thread"></div>
}

export default Comments
