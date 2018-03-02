class ArticlePolicy < ApplicationPolicy
    attr_reader :user, :article

    def update?
        user.admin? or not record.published?
    end
end
