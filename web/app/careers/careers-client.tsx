'use client';

import { useState, useMemo } from 'react';
import Link from 'next/link';
import {
  MapPin,
  Clock,
  Calendar,
  Users,
  Briefcase,
  GraduationCap,
  DollarSign,
  Building,
  Search,
  Filter
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { jobPositions, jobLocations } from '@/lib/careers-data';

const ITEMS_PER_PAGE = 6;

export function CareersClient() {
  const [selectedLocation, setSelectedLocation] = useState('all');
  const [selectedDepartment, setSelectedDepartment] = useState('all');
  const [selectedExperience, setSelectedExperience] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [currentPage, setCurrentPage] = useState(1);

  // Get unique departments from job positions
  const departments = useMemo(() => {
    const deptSet = new Set(jobPositions.map(job => job.department));
    return Array.from(deptSet).sort();
  }, []);

  // Filter jobs based on criteria
  const filteredJobs = useMemo(() => {
    return jobPositions.filter(job => {
      const matchesLocation = selectedLocation === 'all' || job.location === selectedLocation;
      const matchesDepartment = selectedDepartment === 'all' || job.department === selectedDepartment;
      const matchesExperience = selectedExperience === 'all' || job.experience === selectedExperience;
      const matchesSearch = searchQuery === '' ||
        job.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        job.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        job.department.toLowerCase().includes(searchQuery.toLowerCase());

      return matchesLocation && matchesDepartment && matchesExperience && matchesSearch;
    });
  }, [selectedLocation, selectedDepartment, selectedExperience, searchQuery]);

  // Paginate jobs
  const totalPages = Math.ceil(filteredJobs.length / ITEMS_PER_PAGE);
  const paginatedJobs = filteredJobs.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric'
    });
  };

  const getExperienceColor = (experience: string) => {
    switch (experience) {
      case 'entry': return 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300';
      case 'mid': return 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300';
      case 'senior': return 'bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-300';
      case 'lead': return 'bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-300';
      default: return 'bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-300';
    }
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'full-time': return 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300';
      case 'part-time': return 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300';
      case 'contract': return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300';
      case 'internship': return 'bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-300';
      default: return 'bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-300';
    }
  };

  const resetFilters = () => {
    setSelectedLocation('all');
    setSelectedDepartment('all');
    setSelectedExperience('all');
    setSearchQuery('');
    setCurrentPage(1);
  };

  return (
    <div className="min-h-screen bg-background py-8">
      <div className="container mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-foreground mb-4">
            Join Our Team
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Help us democratize AI tools for everyone. We&apos;re looking for passionate individuals
            ready to shape the future of AI accessibility.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Left Sidebar - Filters */}
          <div className="lg:w-1/4">
            <Card className="border-border/40 sticky top-8">
              <CardContent className="p-6">
                {/* Search */}
                <div className="mb-6">
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                    <Input
                      placeholder="Search jobs..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="pl-10"
                    />
                  </div>
                </div>

                {/* Location Filter */}
                <div className="mb-6">
                  <h3 className="font-semibold text-foreground mb-3 flex items-center gap-2">
                    <MapPin className="h-4 w-4" />
                    Location
                  </h3>
                  <div className="space-y-2">
                    {jobLocations.map((location) => (
                      <button
                        key={location.id}
                        onClick={() => setSelectedLocation(location.id)}
                        className={`w-full text-left px-3 py-2 rounded-lg transition-colors flex items-center justify-between ${selectedLocation === location.id
                            ? 'bg-primary text-primary-foreground'
                            : 'hover:bg-muted text-muted-foreground hover:text-foreground'
                          }`}
                      >
                        <span className="flex items-center gap-2">
                          <span>{location.icon}</span>
                          <span className="text-sm">{location.name}</span>
                        </span>
                        <span className="text-xs bg-muted px-2 py-1 rounded-full">
                          {location.count}
                        </span>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Department Filter */}
                <div className="mb-6">
                  <h3 className="font-semibold text-foreground mb-3 flex items-center gap-2">
                    <Building className="h-4 w-4" />
                    Department
                  </h3>
                  <Select value={selectedDepartment} onValueChange={setSelectedDepartment}>
                    <SelectTrigger>
                      <SelectValue placeholder="All Departments" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Departments</SelectItem>
                      {departments.map((dept) => (
                        <SelectItem key={dept} value={dept}>{dept}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                {/* Experience Filter */}
                <div className="mb-6">
                  <h3 className="font-semibold text-foreground mb-3 flex items-center gap-2">
                    <GraduationCap className="h-4 w-4" />
                    Experience Level
                  </h3>
                  <Select value={selectedExperience} onValueChange={setSelectedExperience}>
                    <SelectTrigger>
                      <SelectValue placeholder="All Levels" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Levels</SelectItem>
                      <SelectItem value="entry">Entry Level</SelectItem>
                      <SelectItem value="mid">Mid Level</SelectItem>
                      <SelectItem value="senior">Senior Level</SelectItem>
                      <SelectItem value="lead">Lead/Principal</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                {/* Reset Filters */}
                <Button
                  variant="outline"
                  onClick={resetFilters}
                  className="w-full gap-2"
                  disabled={selectedLocation === 'all' && selectedDepartment === 'all' && selectedExperience === 'all' && searchQuery === ''}
                >
                  <Filter className="h-4 w-4" />
                  Reset Filters
                </Button>

                {/* Company Info */}
                <div className="mt-8 pt-6 border-t border-border/40">
                  <h3 className="font-semibold text-foreground mb-3">Why Join Us?</h3>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• Competitive salary & equity</li>
                    <li>• Flexible remote work</li>
                    <li>• Health & wellness benefits</li>
                    <li>• Professional development</li>
                    <li>• Inclusive culture</li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Right Content - Job Listings */}
          <div className="lg:w-3/4">
            {/* Results Header */}
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-semibold text-foreground">
                {filteredJobs.length} {filteredJobs.length === 1 ? 'Position' : 'Positions'} Available
              </h2>
            </div>

            {/* Job Cards */}
            <div className="space-y-4 mb-8">
              {paginatedJobs.map((job) => {
                const location = jobLocations.find(l => l.id === job.location);
                return (
                  <Card key={job.id} className="border-border/40 hover:shadow-md transition-shadow">
                    <CardContent className="p-6">
                      <div className="flex flex-col lg:flex-row lg:items-start gap-4">
                        {/* Logo Section (1/4) */}
                        <div className="lg:w-1/4">
                          <div className="w-16 h-16 rounded-lg bg-linear-to-br from-primary to-primary/70 flex items-center justify-center text-white font-bold text-lg mb-3">
                            {job.department.slice(0, 2).toUpperCase()}
                          </div>
                          <Badge variant="outline" className="text-xs">
                            {job.department}
                          </Badge>
                        </div>

                        {/* Details Section (3/4) */}
                        <div className="lg:w-3/4 flex-1">
                          <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-3">
                            <div className="flex-1">
                              <Link href={`/careers/${job.id}`}>
                                <h3 className="text-xl font-semibold text-foreground hover:text-primary transition-colors mb-2">
                                  {job.title}
                                </h3>
                              </Link>
                              <div className="flex flex-wrap gap-2 mb-3">
                                <Badge className={getExperienceColor(job.experience)}>
                                  {job.experience.charAt(0).toUpperCase() + job.experience.slice(1)} Level
                                </Badge>
                                <Badge className={getTypeColor(job.type)}>
                                  {job.type.replace('-', ' ').toUpperCase()}
                                </Badge>
                                {job.salaryRange && (
                                  <Badge variant="outline" className="gap-1">
                                    <DollarSign className="h-3 w-3" />
                                    ${job.salaryRange.min.toLocaleString()} - ${job.salaryRange.max.toLocaleString()}
                                  </Badge>
                                )}
                              </div>
                            </div>
                            <div className="flex flex-col gap-1 text-sm text-muted-foreground mt-2 lg:mt-0">
                              <div className="flex items-center gap-1">
                                <MapPin className="h-4 w-4" />
                                <span>{location?.name}</span>
                              </div>
                              <div className="flex items-center gap-1">
                                <Clock className="h-4 w-4" />
                                <span>Posted {formatDate(job.postedDate)}</span>
                              </div>
                              <div className="flex items-center gap-1 text-red-500">
                                <Calendar className="h-4 w-4" />
                                <span>Apply by {formatDate(job.applicationDeadline)}</span>
                              </div>
                            </div>
                          </div>

                          <p className="text-muted-foreground mb-3 line-clamp-2">
                            {job.description}
                          </p>

                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-4 text-sm text-muted-foreground">
                              <span className="flex items-center gap-1">
                                <Users className="h-4 w-4" />
                                {job.responsibilities.length} responsibilities
                              </span>
                              <span className="flex items-center gap-1">
                                <Briefcase className="h-4 w-4" />
                                {job.requirements.length} requirements
                              </span>
                            </div>
                            <Button asChild size="sm">
                              <Link href={`/careers/${job.id}`}>
                                View Details
                              </Link>
                            </Button>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>

            {/* Pagination */}
            {totalPages > 1 && (
              <div className="flex items-center justify-center gap-2">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setCurrentPage(prev => Math.max(1, prev - 1))}
                  disabled={currentPage === 1}
                >
                  Previous
                </Button>

                {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                  <Button
                    key={page}
                    variant={currentPage === page ? "default" : "outline"}
                    size="sm"
                    onClick={() => setCurrentPage(page)}
                    className="w-10"
                  >
                    {page}
                  </Button>
                ))}

                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setCurrentPage(prev => Math.min(totalPages, prev + 1))}
                  disabled={currentPage === totalPages}
                >
                  Next
                </Button>
              </div>
            )}

            {/* No Results */}
            {filteredJobs.length === 0 && (
              <Card className="border-border/40">
                <CardContent className="p-12 text-center">
                  <Briefcase className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                  <h3 className="text-lg font-semibold text-foreground mb-2">
                    No positions found
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    Try adjusting your filters or search terms.
                  </p>
                  <Button onClick={resetFilters}>
                    Reset Filters
                  </Button>
                </CardContent>
              </Card>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
