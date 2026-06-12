from rest_framework.routers import DefaultRouter
from .views import TaskListView

router = DefaultRouter()
router.register("tasks", TaskListView)

urlpatterns = router.urls
