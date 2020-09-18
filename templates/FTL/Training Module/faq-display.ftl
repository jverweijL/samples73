<div class="card">
  <div class="card-header" id="heading${.vars['reserved-article-id'].data}">
    <h2 class="mb-0">
      <button class="btn btn-link btn-block text-left" type="button" data-toggle="collapse" data-target="#collapse${.vars['reserved-article-id'].data}" aria-expanded="true" aria-controls="collapse${.vars['reserved-article-id'].data}">
        <strong>${Question.getData()}</strong>
      </button>
    </h2>
  </div>

  <div id="collapse${.vars['reserved-article-id'].data}" class="collapse" aria-labelledby="heading${.vars['reserved-article-id'].data}" data-parent="#accordionExample">
    <div class="card-body">
      ${Answer.getData()}
    </div>
  </div>
</div>