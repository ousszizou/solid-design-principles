from abc import ABCMeta, abstractmethod


class IWorker(object):
    __metaclass__ = ABCMeta

    @abstractmethod
    def work(self):
        pass

# `IWorker` defines a interface which requires `work` method.


class Worker(IWorker):

    def work(self):
        print "I'm working!!"


class Manager(object):

    def __init__(self):
        self.worker = None

    def set_worker(self, worker):
        assert isinstance(
            worker, IWorker), '`worker` must be of type {}'.format(Worker)

        self.worker = worker

    def manage(self):
        if self.worker is not None:
            self.worker.work()
            # And some complex codes go here....


class SuperWorker(IWorker):

    def work(self):
        print "I work very hard!!!"

# Now, the manager support `SuperWorker`...
# In addition, it will support any worker which obeys the interface defined by `IWorker`!
