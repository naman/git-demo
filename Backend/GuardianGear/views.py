from django.views.generic import TemplateView

# View that serves the index.html from React build folder
class FrontendAppView(TemplateView):
    template_name = "index.html"

    def get_context_data(self, **kwargs):
        return super().get_context_data(**kwargs)
