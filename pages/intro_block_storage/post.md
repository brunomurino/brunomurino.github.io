# Block Storage

- https://www.ibm.com/cloud/learn/block-storage

- http://www.differencebetween.net/technology/internet/difference-between-amazon-s3-and-amazon-ebs/

- https://www.druva.com/blog/object-storage-versus-block-storage-understanding-technology-differences/

- Block storage has only essential metadata, can has to be mounted to be accessible, usually has strong consistency. Since it's mounted is faster than e.g. S3 mounting (which happens over the web).


Object storage generally doesn’t provide you with the ability to incrementally edit one part of a file (as block storage does). Objects have to be manipulated as a whole unit, requiring the entire object to be accessed, updated, then re-written in their entirety. That can have performance implications.

Another key difference is that block storage can be directly accessed by the operating system as a mounted drive volume, while object storage cannot do so without significant degradation to performance. 

- eventual consistency and strong consistency
Eventual consistency is where the latest version of an object will be first stored on one node, and then eventually replicated to its other locations. Strong consistency would require the new version to be immediately replicated.  The strongest consistency would be to delay the write acknowledgment until all copies had been successfully replicated.
**The downside to eventual consistency is that there is no guarantee that a read request returns the most recent version of the data. Strong consistency is a requirement, however, whenever a read request must return the most updated version of the data. Technically, both object and block storage can do either evenual or strong consistency, but typically object storage uses strong consistency and object storage tends to use eventual consistency.**