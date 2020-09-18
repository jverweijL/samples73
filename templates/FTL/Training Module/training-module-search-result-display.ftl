<div class="card">
  <#if Imagekbaf.getData()?? && Imagekbaf.getData() != "">
    <img alt="${Imagekbaf.getAttribute("alt")} thumbnail" data-fileentryid="${Imagekbaf.getAttribute("fileEntryId")}" src="${Imagekbaf.getData()}" class="card-img-top"/>
  </#if>
  <div class="card-body">
    <h3 class="card-title">${.vars['reserved-article-title'].data}</h3>
      <p class="card-text">${.vars['reserved-article-description'].data}</p>
      <a href="${htmlUtil.escape(layout.getGroup().getDisplayURL(themeDisplay, false))}/-/${.vars['reserved-article-url-title'].data} " class="btn btn-primary">Watch it</a>
  </div>
  <div class="card-footer text-muted clearfix">
      <div class="float-left"><i class="far fa-heart"></i> <i class="far fa-eye"></i> 33</div>
      <div class="float-right"><i class="far fa-clock"></i> ${Duration.getData()}</div>
  </div>
</div>